import { SiteClient } from 'datocms-client';

const client = new SiteClient(process.env.DATOCMS_API_TOKEN);

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const contentType = searchParams.get('content_type') || 'datos_contacto';

    try {
        const response = await client.items.all({
            filter: {
                type: contentType,
            },
        });

        const items = response.map((item) => {
            if (!item) {
                console.warn('Elemento inválido:', item);
                return null;
            }

            // Si es datos_contacto
            if (contentType === 'datos_contacto') {
                return {
                    phoneNumbers: item.numeros_de_telefono.map(phone => phone.numero),
                    address: item.direccion,
                    instagramAccounts: item.cuentas_de_instagram.map(account => account.cuenta),
                    scheduleWeekdays: item.horario_weekdays,
                    scheduleWeekends: item.horario_weekends,
                };
            }

            return null;
        }).filter(Boolean);

        return new Response(JSON.stringify(items), {
            headers: { 'Content-Type': 'application/json' },
            'Cache-Control': 'no-store'
        });
    } catch (error) {
        console.error('Error al obtener contenido:', error);
        return new Response('Error al obtener contenido', { status: 500 });
    }
}