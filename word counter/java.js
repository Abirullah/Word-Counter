

  const textInput = document.querySelector("#textInput");
  textInput.addEventListener('input', countstste);
  textInput.addEventListener('keyup', count);
  let i = 0;
  function countstste(){
   const textInput = document.querySelector("#textInput");
   const wordCountElement = document.getElementById("wordCount");
   const charCountElement = document.getElementById("charCount");
   const sentenceCountElement = document.getElementById("sentenceCount");
  

  const text= textInput.value.trim();
   const char = text.length;
 const words = text.split(' ').length -1;
 const words1 = text.split('.').length -1;
 const words2 = text.split('?').length -1;
 const words3 = text.split('!').length -1;
const sentences = text.split('.').length-1;
const sentences1 = text.split('?').length-1;
const sentences2 = text.split('!').length -1;

 wordCountElement.textContent = `Word Count: ${words+words1+words2+words3+i}`;
   charCountElement.textContent = `Character Count: ${char}`;
   sentenceCountElement.textContent = `Sentence Count: ${sentences+sentences1+sentences2+i}`;
  
  }
  function count(event){
    if(event.which === 13){
      const paraCountElement = document.getElementById("paraCount");
      i++;
      paraCountElement.textContent = `Paragraph Count: ${i}`
      
    }
  }
  
// const textInput = document.querySelector("#textInput");
// textInput.addEventListener('input', countstste);
// textInput.addEventListener('keyup', count);

// // Initialize paragraph count outside the function
// let i = 0;

// function countstste(){
//   const textInput = document.querySelector("#textInput");
//   const wordCountElement = document.getElementById("wordCount");
//   const charCountElement = document.getElementById("charCount");
//   const sentenceCountElement = document.getElementById("sentenceCount");

//   const text = textInput.value.trim();
//   const char = text.length;
//   const words = text.split(' ').filter(Boolean).length;  // This prevents empty words
//   const sentences = (text.split('.').length - 1) +
//                     (text.split('?').length - 1) +
//                     (text.split('!').length - 1);

//   wordCountElement.textContent = `Word Count: ${words}`;
//   charCountElement.textContent = `Character Count: ${char}`;
//   sentenceCountElement.textContent = `Sentence Count: ${sentences}`;
// }

// function count(event){
//   if (event.which === 13) {  // Check for Enter key
//     const paraCountElement = document.getElementById("paraCount");

//     // Increment paragraph count
//     i++;

//     // Update paragraph count in UI
//     paraCountElement.textContent = `Paragraph Count: ${i}`;
//   }
// }
