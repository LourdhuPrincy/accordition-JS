const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody=document.querySelector('.accordian_body');
let ans=[];
let buttons=[];

function createFaq() {
  faqData.forEach((el)=>{
    // creating elements
    const faq=document.createElement('div');
    const header=document.createElement('div');
    const h3=document.createElement('h3');
    const p=document.createElement('p');
    const btn=document.createElement('a');

    // setting atributes and innerText
    faq.setAttribute('class', 'faq');
    header.setAttribute('class', 'faq_header');
    btn.setAttribute('class', 'show_btn');
    faq.setAttribute('id', el.id);
    p.setAttribute('class', 'hidden');
    h3.innerText=el.question;
    p.innerText=el.answer;
    btn.innerHTML="+";
    
    // button align
    btn.style.display="flex";
    btn.style.justifyContent="center";
    btn.style.alignItems="center";

    // append child
    header.appendChild(h3);
    header.appendChild(btn);
    faq.appendChild(header);
    faq.appendChild(p);
    accordianBody.appendChild(faq);

    ans.push(p);
    buttons.push(btn);
  }
  );
};
createFaq();

// Showing faq answers
function showFaq(i) {
  if(buttons[i].innerText=="+"){
    ans[i].classList.remove('hidden');
    buttons[i].innerText='-';
  }else{
    ans[i].classList.add('hidden');
    buttons[i].innerText='+';
  };
};

// button updates
function btnStatusUpdate() {
  buttons.forEach((el, i)=>{
    el.addEventListener('click', ()=>{
      showFaq(i);
    });
  });
  };
btnStatusUpdate();


