// let url="https://catfact.ninja/fact";
//  fetch(url);





let url = "https://catfact.ninja/fact";




// fetch(url)
//   .then((response) => {
//     // Check if the response status is OK (status code 200–299)
//     // if (!response.ok) {
//     //   throw new Error(`HTTP error! Status: ${response.status}`);
//     // }
    
//     return response.json(); // Parse the response as JSON
//   })
//   .then((data) => {
//     console.log(data); // Handle the response data
//     return fetch(url);
//   })
//   .then((response)=>{
//     console.log(response);
//     return response.json();
//   })
//   .then((data)=>{
//     console.log(data.fact);
//   })
//   .catch(error => {
//     console.error("Error fetching the cat fact:", error); // Handle any errors
//   });

//   console.log("hi i am aradhna"); //api calls are asynchronos ho ti h isiliy ye wait nhi karenge api ke resolve hone ka 







//   async function getfact(){
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//        console.log( "data1:",data.fact);
//     }
//     catch(e){
//         console.log(e);
//     }
//   }

//   getfact();






  async function getfact(){
    try{
        let res=await axios.get(url);
       console.log( "data1:",res.data.fact);
      return res.data.fact;
    }
    catch(e){
        console.log(e);
        return "No fact found"
    }
   
  }



   let btn=document.querySelector("button");
   
   let ul=document.querySelector("ul");

   btn.addEventListener("click",async()=>{
    let li=document.createElement("li");

    li.innerText=await getfact();   //qki getfact is a async function isiliy wha se respond aane me time lagega isiliy await karna padega taki fact aane se pahle hi na aapend ho jay , ab qki yha await lagana padega to callback me bhi asyns lagana padega
    ul.appendChild(li);
   })