const url = 'https://colegioshirley.azurewebsites.net/Question';
const div = document.getElementById('questionList');

class request {
    async getList (){
        const response = await fetch(url,{method:'GET'});
        
        return await response.json();
    }
    
    async clean () {
        await fetch(url,{method:'DELETE'});
    }
}

const api = new request();

async function getQuestion () {
    div.innerHTML = '';

    const questions = await api.getList();

    if(questions.length >0) {
        questions.forEach(question => {
            div.innerHTML += `<p class="question">${question}</p>`
        });
    } else {
        div.innerHTML += '<p class="notQuestion">Nenhuma Questão</p>'
    }
}

async function clean () {
    await api.clean();
    await this.getQuestion();
}

getQuestion();

setInterval(() => {
    getQuestion();
}, 30000)