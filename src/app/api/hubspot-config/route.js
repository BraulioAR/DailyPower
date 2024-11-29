export async function GET() {
  const hubspotConfig = {
    portalId: process.env.HUBSPOT_PORTAL_ID,
    formId: process.env.HUBSPOT_FORM_ID,
  };

  if (!hubspotConfig.portalId || !hubspotConfig.formId) {
    return new Response(
      JSON.stringify({ error: 'HubSpot configuration is missing' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(JSON.stringify(hubspotConfig), {
    headers: { 'Content-Type': 'application/json' },
  });
}