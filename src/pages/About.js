import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
	return (
		<div className="about">
			<div
				className="aboutTop"
				style={{ backgroundImage: `url(${MultiplePizzas})` }}
			></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eius voluptate tempore deserunt eum, expedita, qui ut modi nulla sequi provident assumenda, quidem hic! Nemo expedita officiis quis quasi unde cumque architecto qui sint inventore eius! Veritatis ratione illum neque fuga, iste necessitatibus! Corporis eveniet minus aliquid, earum dolorem optio sed ratione! Ab id explicabo veritatis sit, repudiandae fugiat rem labore distinctio nihil quas, dolores consectetur est facere voluptas cumque dignissimos voluptatibus perspiciatis quod commodi, amet iusto nemo dolore. Non recusandae officia placeat amet atque earum nulla voluptas voluptatibus a, facilis laborum soluta velit neque quam molestiae fuga vel ipsam maiores, et reprehenderit natus aliquid sed magni. Ab, doloribus consequatur. Velit a eum iusto ducimus sequi amet commodi itaque, at et laboriosam reiciendis est pariatur ipsum. Deleniti dignissimos facere amet enim pariatur! Corrupti sunt doloribus impedit hic, illum sint voluptas commodi tenetur alias vero laborum debitis nemo facere dicta, eligendi exercitationem. Sint unde dolorum cumque quas omnis eligendi earum nostrum voluptatum dicta quod ex, ipsa sit, eaque illo quisquam provident consequatur ut ad vitae ea labore veniam? Eius nesciunt minus autem maxime placeat quis, necessitatibus cupiditate nulla quasi iusto ex illum velit fugiat nobis molestias temporibus vero ea totam praesentium.</p>
            </div>
		</div>
	);
}

export default About;
