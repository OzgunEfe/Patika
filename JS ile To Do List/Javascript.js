const newInput = document.querySelector('#task');
const button = document.querySelector('.button');
const liste = document.querySelector('ul');


for (let i=0; i < liste.children.length; i++) {
    liste.children[i].innerHTML += `<button style="margin-right: 20px; margin-top:15px"class="close">&times</button></li>`;
}

function newElement() {
    if (newInput.value != ''){
        liste.innerHTML += `<li>${newInput.value}<button style="margin-right: 20px; margin-top:15px" class="close">&times</button></li>`;
        let toastBasarili = document.querySelector('.success');
        let toastAlertBasarili = new bootstrap.Toast(toastBasarili);
        toastAlertBasarili.show()
    } else{
        let toastBasarisiz = document.querySelector('.error');
        let toastAlertBasarisiz = new bootstrap.Toast(toastBasarisiz);
        toastAlertBasarisiz.show()
    }
}


button.addEventListener('submit', newElement);

liste.addEventListener('click', function (e) {
    if (e.target.className == '' || e.target.className == 'checked') {
        e.target.classList.toggle('checked');
    } else {
        e.target.parentElement.remove();
    }
});