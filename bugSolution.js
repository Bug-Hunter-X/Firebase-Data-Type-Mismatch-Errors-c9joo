function fetchData(snapshot) {
  try {
    // Check if the data exists and is the correct type before accessing its properties.
    if (snapshot.exists() && typeof snapshot.val() === 'string') {
      const data = snapshot.val();
      console.log('Data:', data);
      //Process data
    } else {
      console.error('Error: Data is missing or not a string.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

//Example usage
dbRef.once('value', fetchData);

// Additional robust validation could be added here based on the expected data format (e.g., using regular expressions or schema validation).