// Vercel Serverless Function to submit leads to FollowUpBoss
export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get FollowUpBoss API key from environment variable
    const FUB_API_KEY = process.env.FUB_API_KEY;
    
    if (!FUB_API_KEY) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        // Get form data from request body
        const { firstName, lastName, email, phone, tag } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Prepare data for FollowUpBoss
        const fubData = {
            firstName: firstName,
            lastName: lastName,
            emails: [{ value: email }],
            phones: phone ? [{ value: phone }] : [],
            source: 'Vercel Test Form',
            tags: tag ? [tag] : []
        };

        // Post to FollowUpBoss API
        const fubResponse = await fetch('https://api.followupboss.com/v1/leads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(FUB_API_KEY + ':').toString('base64')}`
            },
            body: JSON.stringify(fubData)
        });

        const fubResult = await fubResponse.json();

        if (!fubResponse.ok) {
            console.error('FollowUpBoss error:', fubResult);
            return res.status(500).json({ 
                error: 'Failed to submit to FollowUpBoss',
                details: fubResult 
            });
        }

        // Success!
        return res.status(200).json({ 
            success: true, 
            message: 'Lead submitted successfully',
            leadId: fubResult.id 
        });

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            message: error.message 
        });
    }
}
