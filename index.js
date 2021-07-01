
const quiz = [
  {
    question: 'リンカーンは大統領になる前は何をしていたでしょうか？',
    answers: [ '音楽家', 'プロ野球選手', '農家', 'レスラー'],
    correct: 'レスラー'
  }, {
    question: '日本の郵便ポストは今と違う色でした。果たして何色だったでしょうか？',
    answers: [ '黒', '白', '青', '緑'],
    correct: '黒'
  }, {
    question: '靴の「ローファー」を日本語にするとどういう意味になるでしょうか？',
    answers: [ '優しい人', '馬鹿', '寂しがり屋', '怠け者'],
    correct: '怠け者'
  }, {
    question: 'キリンの平均睡眠時間は？',
    answers: [ '20時間', '2日に１回で5分', '20分', '1時間'],
    correct: '20分'
  }


];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズはここで終了です！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了です！あなたの点数は' + score + '/' + quizLen + 'です！';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}







