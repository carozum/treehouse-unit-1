const main = document.querySelector('main');
let content='';

for (let i=1; i<11; i++){
    content += `
        <div class="number">
            <p>${i}</p>
        </div>
    `;  
}

main.innerHTML = content;