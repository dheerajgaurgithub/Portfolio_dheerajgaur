// Simple test script to check backend endpoints
const BACKEND_URL = 'https://portfolio-dheerajgaur-1.onrender.com';

async function testEndpoint(url, method = 'GET', data = null) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    if (data) {
      options.body = JSON.stringify(data);
    }
    
    console.log(`\n🧪 Testing ${method} ${url}`);
    const response = await fetch(url, options);
    const result = await response.json();
    
    console.log(`✅ Status: ${response.status}`);
    console.log(`📄 Response:`, JSON.stringify(result, null, 2));
    
    return { success: true, status: response.status, data: result };
  } catch (error) {
    console.log(`❌ Error:`, error.message);
    return { success: false, error: error.message };
  }
}

async function runTests() {
  console.log('🚀 Starting backend tests...\n');
  
  // Test 1: Health check
  await testEndpoint(`${BACKEND_URL}/api/health`);
  
  // Test 2: Contact API info
  await testEndpoint(`${BACKEND_URL}/api/contact`);
  
  // Test 3: SMTP test
  await testEndpoint(`${BACKEND_URL}/api/contact/test`);
  
  // Test 4: Contact form submission
  await testEndpoint(`${BACKEND_URL}/api/contact`, 'POST', {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message'
  });
  
  console.log('\n✅ All tests completed!');
}

runTests().catch(console.error);
