import React from 'react';
import './Art.css';

import helmet from './photos/helmet.png';
import shark from './photos/shark.png';
import cockroach from './photos/cockroach.jpg';
import imposter from './photos/imposter.png';

class Art extends React.Component {
  render() {
    return (
      <div>
        <div className="art1">
          <div className="project_week_container">
            <div className="project_week">
              <iframe title="pw" src="https://www.youtube.com/embed/s0fM7SAyN2c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="project_week_txt">
            <h3>Have You Supported Communism?</h3>
            <p>Media: digital animation</p>
            <p>Size: 7 seconds</p>
            <p>In Project Week, I learned about the Khmer Rouge massacre, when the Cambodian Communist regime ruthlessly killed their own people for the ideology. Coming from Vietnam, a Socialist country, I could relate to that pain. The artwork takes the form of a poster to satire the hypocrisy of Communists, who propagandise people to serve their country yet harm them in return. There is an animation twist to portray the bruteless acts of killing that, for the most part, were unseen when they were committed.</p>
          </div>
        </div>
        <div className="art2">
          <div className="words_container">
            <div className="words">
              <iframe title="words" src="https://www.youtube.com/embed/DfkY26hFI5E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="words_txt">
            <h3>My wor(l)ds</h3>
            <p>Media: Computer programming</p>
            <p>Size: 2 minutes (program refreshes every 2 minutes)</p>
            <p>My Wor(l)ds is inspired by the personal aspects of my being. First is synaesthesia, the condition that allows me to associate certain words with colours. Second, the words are collected from essays that I have written throughout my IB years. Third, the artwork itself is made with programming, my passion. These aspects convey the concept of unconventionality and individuality, as synaesthesia is relatively rare, my essays are personal to me, and programming is an uncommon artmaking method.</p>
          </div>
        </div>
        <div className="art3">
          <img className="helmet" alt="flying food" src={helmet}></img>
          <div className="helmet_txt">
            <h3>A Flying Breakfast</h3>
            <p>Media: Mixed media</p>
            <p>Size: 25 x 30 x 25cm (width, length, height)</p>
            <p>A Flying Breakfast represents a scene of chaos, in which a person trips and spill the content of the tray they are balancing on their head. The Vietnamese food--banh mi and iced coffee-- symbolizes my cultural identity where I find peace, and their falling apart reflects the chaos I feel in a new international environment where my Vietnamese values and ways of conduct clash with others’. My use of food on the helmet is inspired by fashion designer Pham Phuoc Dien’s use of food in his costumes.</p>
          </div>
        </div>
        <div className="art4">
          <img className="shark" alt="environment" src={shark}></img>
          <div className="helmet_txt">
            <h3>I Can’t Breathe</h3>
            <p>Media: Assorted throwaway plastics collected from school community: cassette tapes, flip flops, bottle caps, plastic water bottles, cling wrap, plastic sheeting, IKEA pop up laundry basket, paint</p>
            <p>Size: 70cm length, 45cm diameter</p>
            <p>I Can’t Breathe is inspired by my experience with MeshMinds’ (a group of artists that combine art with technology to promote sustainable development) virtual reality simulating plastic pollution in the ocean, in which the user swims in a vast surface area of water covered in plastic waste. It felt suffocating, and I intend to evoke a similar reaction from my viewer with this artwork, prompting them to consider the effects of their plastic consumption.</p>
          </div>
        </div>
        <div className="art5">
          <img className="cockroach" alt="fear" src={cockroach}></img>
          <div className="helmet_txt">
            <h3>Squished</h3>
            <p>Media: Mixed media</p>
            <p>Size: 40 x 30cm</p>
            <p>Squished captures my fear and joy, which stem from my childhood, when the gruesome sight of cockroaches squished by my father’s slippers was seared onto my memory, and when my grandma’s delicious mooncakes prompted me to pursue baking myself. The piece thus features a dead cockroach with its parts crooked and organs spilling out, and swirls of frosting representing my hobby for baking cupcakes. It is placed on top of a dining table to further highlight my love for baking and food.</p>
          </div>
        </div>
        <div className="art6">
          <img className="imposter" alt="self" src={imposter}></img>
          <div className="helmet_txt">
            <h3>Two Portraits of An Imposter</h3>
            <p>Media: Oil on canvas</p>
            <p>Size: 94 x 50cm</p>
            <p>The artwork displays my imposter syndrome when I first studied abroad. I was inspired to put my emotions on canvas by Francis Bacon’s portraits, which convey powerful emotions such as love, eroticism, fear, and pain. The blue and purple create a sombre mood, reflecting my emotions. The twisted face represents my warped self-image. The choice of diptych serves not only to emulate Bacon, but also to symbolize my blindness to who I am, as the figure on the right looks left but with his eyes closed.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Art;
