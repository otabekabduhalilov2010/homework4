const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.onclick = () => {
    menu.classList.toggle('open')
}











const logo = [

    {
        img:'https://cubilogy.com/wp-content/uploads/elementor/thumbs/cr625-qmlotgkx5v8uy94j0x2t7rnf47qercll7yiylpde6o.jpg',
        name:'3D Soft Curves',
        description:'👦🏻Current Bid',
        Comment:'Esther Howard',
    },
    {
        img:'https://bluedom.swiss/wp-content/uploads/2021/11/digitalinnovation-2048x1365.jpg',
        name:'3D Soft Curves',
        description:'👦🏼Current Bid',
        Comment:'Esther Howard',
    },
    {
        img:'https://images.techinsider.ru/upload/img_cache/85c/85cfe6b2b05f186e197b48c2dbe47414_ce_1920x1280x0x0_cropped_666x444.webp',
        name:'3D Soft Curves',
        description:'👦🏿Current Bid',
        Comment:'Esther Howard',
    },
    {
        img:'https://ramonka.ru/wp-content/uploads/2024/01/milad-fakurian-420x280.jpg',
        name:'3D Soft Curves',
        description:'👦🏿Current Bid',
        Comment:'Esther Howard',
    },
    {
        img:'https://cdn.skillbox.pro/academgen/blocks/about_course/xl/CuXasKUFgcxMs3T6eB2xGXeT5LlUI8901hHgVP4D.webp',
        name:'3D Soft Curves',
        description:'👦🏿Current Bid',
        Comment:'Esther Howard',
    },
    {
        img:'https://img.ringpublishing.com/1/R5Vk9l8aHR0cHM6Ly9vY2RuLmV1L3B1bHNjbXMtdHJhbnNmb3Jtcy8xL0FLY2t0a3BUVVJCWHk5bU0ySXpZemN5WmpoaFpXWmpaamRqWTJVNFl6UTNPREUzWkRjMVl6azBNQzV3Ym1lU2xRTUFBTTBFQU0wQ1FKTUZ6UU53elFIdpGTBc0DcM0B794AAaExBA',
        name:'3D Soft Curves',
        description:'👦🏿Current Bid',
        Comment:'Esther Howard',
    },
    {
        img:'https://images.postnews.ru/unsafe/rs:auto:750:420/gravity:ce/q:90/plain/s3://postnews-new-prod/upload/6390b06df842030012c0b5b9-2160x.jpeg',
        name:'3D Soft Curves',
        description:'👦🏿Current Bid',
        Comment:'Esther Howard',
    },
    {
        img:'https://habrastorage.org/r/w1560/getpro/habr/upload_files/84b/6d6/84d/84b6d684d4892364f3497269542c05e9.jpg',
        name:'3D Soft Curves',
        description:'👦🏻Current Bid',
        Comment:'Esther Howard',
    },
    {
        img:'https://content.domino-crm.com/wp-content/uploads/2023/09/home-plans-01.svg',
        name:'3D Soft Curves',
        description:'👦🏻Current Bid',
        Comment:'Esther Howard',
    },
    
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2i1EIJaj56yTXThlumY6vdpptjNZAdpUEHJI_0kTUmqc8KNg',
        name:'3D Soft Curves',
        description:'👦🏻Current Bid',
        Comment:'Esther Howard',
    },
    {
        img:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjA0MpP9wFY3rF_lTKKA1RWQbDJjceAYnx8tlBvqvJaBRiEOT8',
        name:'3D Soft Curves',
        description:'👦🏻Current Bid',
        Comment:'Esther Howard',
    },
  

]


const wrappers = document.querySelector('.wrappers')




logo.forEach( card => {
    wrappers.innerHTML += `
            <div class="card">
            <img src=${card.img} alt="">
            <h1>${card.name}</h1>
            <div class="text35">
            <h4>${card.description}</h4>
            <p>${card.Comment}</p>
            </div>
          </div>
          `
})



const people = [
    {
        img:'https://images.wallpaperscraft.ru/image/single/krugi_gradient_razvody_161886_225x300.jpg',
        name:'🧔🏻Tung Tran',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://fr.worldtempus.com/sites/default/files/styles/card_1200x1014/public/2024-07/78710.jpg.webp?itok=zVuTfGGx',
        name:'🧑🏻‍🦱Wade Warren',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://lekolty-arcade.live/wp-content/uploads/2023/11/43223067-2148-4727-A9CC-5EE053CBCDD9-300x300.jpeg',
        name:'👦🏼Arlene McCoy',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://www.artificialintelligence-news.com/wp-content/uploads/2024/07/ai-game-design-artificial-intelligence-2048x1445.jpg',
        name:'🧑🏾‍🦲Dianne Russell',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://images.wallpaperscraft.ru/image/single/krugi_gradient_razvody_161886_225x300.jpg',
        name:'🧔🏻Tung Tran',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://fr.worldtempus.com/sites/default/files/styles/card_1200x1014/public/2024-07/78710.jpg.webp?itok=zVuTfGGx',
        name:'🧑🏻‍🦳Savannah Nguyen',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://lekolty-arcade.live/wp-content/uploads/2023/11/43223067-2148-4727-A9CC-5EE053CBCDD9-300x300.jpeg',
        name:'Jenny Wilson',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://www.artificialintelligence-news.com/wp-content/uploads/2024/07/ai-game-design-artificial-intelligence-2048x1445.jpg',
        name:'🧔🏻Tung Tran',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://images.wallpaperscraft.ru/image/single/krugi_gradient_razvody_161886_225x300.jpg',
        name:'🧔🏻Tung Tran',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://fr.worldtempus.com/sites/default/files/styles/card_1200x1014/public/2024-07/78710.jpg.webp?itok=zVuTfGGx',
        name:'🧔🏻Tung Tran',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://lekolty-arcade.live/wp-content/uploads/2023/11/43223067-2148-4727-A9CC-5EE053CBCDD9-300x300.jpeg',
        name:'🧔🏻Tung Tran',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },
    {
        img:'https://www.artificialintelligence-news.com/wp-content/uploads/2024/07/ai-game-design-artificial-intelligence-2048x1445.jpg',
        name:'🧔🏻Tung Tran',
        description:'Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting #bitcoin since 2012.',
        followers:'238 Followers'
    },

]



const wrapper12 = document.querySelector('.wrapper12')



people.forEach( cards14 => {
    wrapper12.innerHTML += `
           <div class="cards14">
                    <img src="${cards14.img}" >
                    <h1>${cards14.name}</h1>
                    <p>${cards14.description}</p>
                    <h4>${cards14.followers}</h4>
                </div>
          `
})


















document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7741118087:AAHd-E4s9_eObRdq2y0wifF6wgu2ldVBk9s';  // Замените на ваш токен
    const chat_id = '-4541015938';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;
  
    const data = {
      chat_id: chat_id,
      text: message
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Message sent!");
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });
  















const closeBtn = document.querySelector('#closeBtn')
const modalBtn = document.querySelector('#modalBtn')
const modal = document.querySelector('.modal')


modalBtn.onclick = () => {
    modal.classList.add('open-modal')
}

closeBtn.onclick = () => {
    modal.classList.remove('open-modal')
}

modal.onclick = (e) => {
    // modal.classList.remove('open-modal')

    console.log(e.target)

    if(!e.target.closest('.modal')) {
        modal.classList.remove('open-modal')
    }

}



