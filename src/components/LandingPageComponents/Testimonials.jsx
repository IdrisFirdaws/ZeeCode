import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Aisha Suleiman",
            role: "student",
            text: "Taking these courses has been a game-changer for me. The flexible schedule allowed me to learn at my own pace, and the content was engaging and easy to understand. I've gained valuable skills that have already made a difference in my career.",
            image: "assets/persons/1.jpg"
        },
        {
            name: "Alex Johnson",
            role: "student",
            text: "I was looking for a way to enhance my skills for career advancement, and I found exactly what I needed here. The courses are well-structured, and the instructors are very knowledgeable. The practical insights I gained have given me a competitive edge in my job.",
            image: "assets/persons/2.jpg"
        },
        {
            name: "Sarah Williams",
            role: "student",
            text: "As someone who loves learning new things, this platform has been a treasure trove of knowledge. The variety of courses available is fantastic, and I appreciate the high quality of the material. It's helped me explore new interests and develop new skills.",
            image: "assets/persons/3.jpg"
        },
        {
            name: "Firdaws Idris",
            role: "student",
            text: "The web development courses provided a solid foundation and practical experience. The hands-on projects were particularly valuable in helping me understand the real-world applications of what I was learning.",
            image: "assets/persons/4.jpg"
        },
        {
            name: "John Doe",
            role: "student",
            text: "The online courses offered here are exceptional. The instructors are experts in their fields and the curriculum is comprehensive. It's a perfect platform for anyone looking to learn web development.",
            image: "assets/persons/5.jpg"
        },
        {
            name: "Emily Clark",
            role: "student",
            text: "These courses have been instrumental in my journey to becoming a web developer. The content is clear and well-organized, making it easy to follow along and build up my skills step by step.",
            image: "assets/persons/6.jpg"
        },
        {
            name: "Michael Brown",
            role: "student",
            text: "I appreciated the practical approach of the courses. The real-world projects and assignments helped me apply what I learned and gain confidence in my abilities.",
            image: "assets/persons/1.jpg"
        },
        {
            name: "Linda Nguyen",
            role: "student",
            text: "The learning platform is intuitive and the support from instructors is fantastic. I've been able to learn at my own pace, and the courses have greatly improved my coding skills.",
            image: "assets/persons/2.jpg"
        },
        {
            name: "James Wilson",
            role: "student",
            text: "The web development courses have exceeded my expectations. The instructors provide clear explanations and are always available to answer questions. I've gained a lot of practical knowledge that I can use in my career.",
            image: "assets/persons/3.jpg"
        },
        {
            name: "Sophia Martinez",
            role: "student",
            text: "I found the project-based approach to be very effective. It was great to build real websites and applications as I learned, which made the whole experience much more engaging and rewarding.",
            image: "assets/persons/4.jpg"
        },
        {
            name: "Daniel Lee",
            role: "student",
            text: "The depth of the courses and the quality of instruction have really impressed me. I've been able to expand my skills significantly, and the projects I've completed have boosted my portfolio.",
            image: "assets/persons/5.jpg"
        },
        {
            name: "Natalie Perez",
            role: "student",
            text: "The combination of theoretical knowledge and practical assignments was perfect. It allowed me to apply what I was learning in a real-world context, which was invaluable for my development as a web developer.",
            image: "assets/persons/6.jpg"
        },
        {
            name: "Olivia Chen",
            role: "student",
            text: "The community aspect of this learning platform is fantastic. Connecting with other students and instructors has provided me with support and motivation to keep pushing forward.",
            image: "assets/persons/1.jpg"
        },
        {
            name: "David Smith",
            role: "student",
            text: "These courses have been a fantastic investment in my career. The skills I've learned are directly applicable to my job, and I've already seen a return on my investment through better job performance and new opportunities.",
            image: "assets/persons/2.jpg"
        },
        {
            name: "Laura Kim",
            role: "student",
            text: "I was a complete beginner when I started, but these courses have given me the confidence and skills to pursue a new career in web development. The instructors are supportive and the material is accessible and engaging.",
            image: "assets/persons/3.jpg"
        },
        {
            name: "Mark Johnson",
            role: "student",
            text: "The structured learning path was exactly what I needed. It guided me from basic concepts to advanced techniques in a clear and logical way, making the learning process smooth and enjoyable.",
            image: "assets/persons/4.jpg"
        },
        {
            name: "Amara Singh",
            role: "student",
            text: "The hands-on projects were the highlight for me. They allowed me to apply what I was learning immediately, which helped cement my understanding and build my confidence in using new skills.",
            image: "assets/persons/5.jpg"
        },
        {
            name: "Benjamin Evans",
            role: "student",
            text: "The real-world applications of the skills I've learned are incredible. I'm now able to contribute to projects at work in a meaningful way, and I've even started taking on freelance projects on the side.",
            image: "assets/persons/6.jpg"
        },
        {
            name: "Chloe Taylor",
            role: "student",
            text: "The diversity of the course offerings allowed me to tailor my learning to my interests and career goals. I've explored various aspects of web development, which has been both enlightening and fun.",
            image: "assets/persons/1.jpg"
        },
        {
            name: "Joshua Parker",
            role: "student",
            text: "The platform's user-friendly interface made the learning experience seamless. I could easily track my progress and revisit materials whenever I needed a refresher, which was very convenient.",
            image: "assets/persons/2.jpg"
        }
    ];


    // Shuffle the testimonials array and select the first four items
    const shuffledTestimonials = testimonials.sort(() => 0.5 - Math.random()).slice(0, 4);

    return (
        <div className='testimonial section'>
            <div className="title">
                Testimonials
            </div>
            <p className="titleText">Hear what our learners have to say! Our community of students and instructors share their experiences and success stories, highlighting the transformative power of our courses. From career advancements to personal growth, our platform has made a significant impact on their lives. Read their testimonials and discover how our courses can help you achieve your goals and unlock new opportunities. Join us and become a part of a supportive and inspiring learning community!</p>

            <div className="content">
                {shuffledTestimonials.map((testimonial, index) => (
                    <div className="testimonialItem" key={index}>
                        <div className="testTop">
                            <img src={testimonial.image} alt={testimonial.name} />
                            <div className="testTopRight">
                                <div className="name">
                                    {testimonial.name}
                                </div>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                        <div className="testDet">
                            <p>"{testimonial.text}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
