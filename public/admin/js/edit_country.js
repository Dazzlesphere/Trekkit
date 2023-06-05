const fetchButton = document.getElementById('fetchButton');
const saveButton  = document.getElementById('saveButton');

fetchButton.addEventListener('click', fetchData);
saveButton.addEventListener('click', (e) => {
    console.log('save button clicked');
});

function fetchData(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var fetchURL = '/api/country/' + encodeURIComponent(name);

  // Make the fetch request
  fetch(fetchURL)
    .then(response => response.json())
    .then(data => {
      // Populate the form fields with the data
      if (data.hasOwnProperty('name')) {
        document.getElementById('name').value = data.name;
      }
      if (data.hasOwnProperty('officialName')) {
        document.getElementById('officialName').value = data.officialName;
      }
      if (data.hasOwnProperty('region')) {
        document.getElementById('region').value = data.region;
      }
      if (data.hasOwnProperty('subregion')) {
        document.getElementById('subregion').value = data.subregion;
      }
      if (data.hasOwnProperty('capital')) {
        document.getElementById('capital').value = data.officialName;
      }
      if (data.hasOwnProperty('alpha2')) {
        document.getElementById('alpha2').value = data.alpha2;
      }
      if (data.hasOwnProperty('alpha3')) {
        document.getElementById('alpha3').value = data.alpha3;
      }
      if (data.hasOwnProperty('population')) {
        document.getElementById('population').value = data.population;
      }
      if (data.hasOwnProperty('languages')) {
        var languagesList = Object.values(data.languages).join(', ');
        document.getElementById('languages').value = languagesList;
      }

      fetchButton.disabled = true;
      saveButton.disabled = false;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
