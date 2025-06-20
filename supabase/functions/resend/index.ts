const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

const handler = async (request: Request): Promise<Response> => {
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    try {
        const body = await request.json();
        const { to, subject, html } = body;

        if (!to || !subject || !html) {
            return new Response(
                JSON.stringify({ error: 'Champs requis manquants (to, subject, html)' }),
                {
                    status: 400,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                },
            );
        }

        const resendRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'contact@sebastien-dev.fr',
                to,
                subject,
                html,
            }),
        });

        const data = await resendRes.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        return new Response(
            JSON.stringify({ error: 'Erreur serveur', details: err.message }),
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            },
        );
    }
};

Deno.serve(handler);