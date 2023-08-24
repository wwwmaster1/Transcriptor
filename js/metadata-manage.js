'use strict';

let metaForm = document.getElementById('MetaForm');

if (metaForm) {
  metaForm.addEventListener('submit', function(event){
    storeMetaData({
      title: document.getElementById('title').value,
      event: document.getElementById('event').value,
      location: document.getElementById('location').value,
      time: document.getElementById('time').value,
    });

    event.preventDefault();
  }, false);
}

function storeMetaData(metaParams) {
  console.log(metaParams);

}
