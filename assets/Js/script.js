const collection = [
    {
      name: "All Eyez on Me",
      artiste: "Tupac Shakur",
      releaseDate: "13 février 1996",
      picture:"assets/Pictures/TupacShakur.jpg",
      genre: ["Hip-hop", "Gangsta rap"],
      
    },
    {
        name: "UMLA",
        artiste: "Alpha Wann",
        releaseDate: "21 septembre 2018",
        picture:"assets/Pictures/AlphaOne.jpg",
        genre: ["Hip-hop/Rap", "French Rap"],
        
      },
      {
        name: "JVLIVS II",
        artiste: "SCH",
        releaseDate: "19 mars 2021",
        picture:"assets/Pictures/JVLIVSII.jpg",
        genre: ["Hip-hop/Rap", "French Rap"],
       
      },
      {
        name: "LMF",
        artiste: "Freeze Corleone",
        releaseDate: "11 septembre 2020",
        picture:"assets/Pictures/FreezeCorleone.jpg",
        genre: ["Hip-hop/Rap", "French Rap"],
        
      },
      {
        name: "Members Only, Vol. 4",
        artiste: "Members Only",
        releaseDate: "23 janvier 2019",
        picture:"assets/Pictures/MembersOnlyVol4.jpg",
        genre: ["Hip-hop"],
        
      },
      {
        name: "Meet the Woo 2",
        artiste: "Pop Smoke",
        releaseDate: "7 février 2020",
        picture:"assets/Pictures/PopSmoke.jpg",
        genre: ["Hip-hop"],
        
      },
      {
        name: "CHOMP 2",
        artiste: "Russ",
        releaseDate: "8 décembre 2021",
        picture:"assets/Pictures/CHOMP2.jpg",
        genre: ["Hip-hop", "Variété"],
        
      },
      {
        name: "Look at Me: The Album",
        artiste: "XXXTentacion",
        releaseDate: "10 juin 2022",
        picture:"assets/Pictures/LookAtMe.jpg",
        genre: ["Hip-hop","RAP US"],
        
      },
      {
        name: "V",
        artiste: "Vald",
        releaseDate: "4 février 2022",
        picture:"assets/Pictures/PopSmoke.jpg",
        genre: ["Hip-hop/Rap", "French Rap"],
        
      },
      {
        name: "Poésie d'une pulsion",
        artiste: "B.B Jacques",
        releaseDate: "2 février 2022",
        picture:"assets/Pictures/PoesiePulsion.jpg",
        genre: ["Hip-hop/Rap", "French Rap"],
        
      },
  ];

  const container = document.getElementById('container');

collection.forEach((result, idx) => {
  // Create card element

  // Construct card content
  const content = `  
  <div class="Card">           
  <div class="Card-Pictures">  
  <img src="${result.picture}" alt="">
  </div>
  <div class="Card-Gender">
      <span class = "genre"> ${collection[1].genre[0]} </span>
      
  </div>
  <div class="Card-Title">
      <h3>Album :</h3>
      ${result.name}
  </div>
  <div class="Card-Artiste">
      <h3>Artiste :</h3>
      ${result.artiste}
  </div>
  <div class="Card-Description">
      <p>TEST BLABLABLA LOREM IPSUM</p>
      ${result.releaseDate}
  </div>
  </div>`;

  // Append newyly created card element to the container
  container.innerHTML += content;
})
  /*
  for (let elements of collection){
    let card = `
            <div class="card">
                <div class="card__image" style="background-image: url(${elements.picture})"></div>
                <div class="card__content">
                    <div class="card__genre">
                        <span class="genre">${elements.genre[0]}</span>
                        <span class="genre--2">${elements.genre[1]}</span>
                        <span class="genre--3">${elements.genre[2]}</span>
                    </div>
                    <div class="card__name">
                        <h2 class="card__title">${elements.name}</h2>
                    </div>
                    <div class="card__director">
                        <p>${elements.director}</p>
                    </div>
                        <div class="card__cast">
                        <p>${elements.cast[0]}</p>
                        <p>${elements.cast[1]}</p>
                        <p>${elements.cast[2]}</p>
                    </div>
                    <div class="card__releaseYear">
                        <p>${elements.releaseYear}</p>
                    </div>
                </div>
            </div>`;
    document.getElementById('main').insertAdjacentHTML("beforeend", card);
} 
  

    /*
    <div class="card">
    <div >
      <div class="card-body">
        <img src="${result.picture}" alt="">
        <h3> Genre: ${result.genre}</h3>
        <h2>Tiltle: ${result.name}</h2>
        <p>Author: ${result.artiste}</p>
        <p>Year of release: ${result.releaseDate}</p>
    
        ...
      </div>
    </div>
  </div>



    for(let i = 0; i< collection.length; i++){

    let Card = `  
    <div class="Card">           
    <div class="Card-image">  

    </div>
    <div class="Card-Gender">
        <span class = "genre"> ${collection[i].genre[0]} </span>
        
        
    </div>
    <div class="Card-Title">
        <h3>Album :</h3>
    </div>
    <div class="Card-Artiste">
        <h3>Artiste :</h3>
    </div>
    <div class="Card-Description">
        <p>TEST BLABLABLA LOREM IPSUM</p>
    </div>
    </div>`;
    
    document.getElementById('main').insertAdjacentHTML("beforeend", Card)
  }
  */