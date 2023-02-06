import { useState } from "react";

const Section = ({title, description, isVisible,setIsVisible, id})=>{
    //const [isVisible, setIsVisible] = useState(false);

    return(<div className="border m-2 p-2 border-black">
        <h2 className="font-bold  ">{title}</h2>
        {isVisible ? <button onClick={() =>{setIsVisible("")}} className="cursor-pointer underline">Hide</button>:
        <button onClick={() =>{setIsVisible(id)}} className="cursor-pointer underline">Show</button>}
        {isVisible && <p className="text-xs">{description}</p>}
        </div>);
}

const Instamart = () => {
    const [isVisibleSection, setIsVisibleSection] = useState("about");

    return(<div>
        <h1 className="text-2xl  font-bold">Instamart</h1>
        <Section id={"about"} setIsVisible={(str) => setIsVisibleSection(str)} isVisible={isVisibleSection === "about"} title={"About Instamart"} description={"Lorem ipsum dolor sit amet. 33 alias maxime et dolores temporibus ut nemo sequi qui omnis dolores? Et minima minima et delectus sequi qui dicta omnis aut commodi culpa eum nisi galisum. Ut voluptatem consequuntur ab eaque ipsa At nisi fugit. Ut mollitia consequatur ut culpa iusto qui optio eaque ut repellat deserunt et ipsum assumenda est odit vero. Et rerum voluptas in velit laboriosam At sint quos et perspiciatis aliquid ut illum voluptatem non dolorem quaerat ut minima ratione. Ea dolorem tempora aut quidem dolores At voluptas placeat et rerum optio? Sed ratione nostrum nam quibusdam ipsum eum eaque porro cum sapiente enim quo blanditiis accusamus est perspiciatis voluptas. Est repellendus sint in rerum laboriosam et quae voluptas nam consequuntur magnam aut aspernatur odit qui fuga molestiae ab fugit deserunt. Ut autem veritatis et aperiam odit eum numquam magni. Est consequuntur quia ad exercitationem modi ad molestias consequuntur. Eum dolores perferendis ut reprehenderit excepturi eum omnis dicta."}/>
        <Section id={"team"} setIsVisible={(str) => setIsVisibleSection(str)} isVisible={isVisibleSection === "team"} title={"Team Instamart"} description={"Lorem ipsum dolor sit amet. 33 alias maxime et dolores temporibus ut nemo sequi qui omnis dolores? Et minima minima et delectus sequi qui dicta omnis aut commodi culpa eum nisi galisum. Ut voluptatem consequuntur ab eaque ipsa At nisi fugit. Ut mollitia consequatur ut culpa iusto qui optio eaque ut repellat deserunt et ipsum assumenda est odit vero. Et rerum voluptas in velit laboriosam At sint quos et perspiciatis aliquid ut illum voluptatem non dolorem quaerat ut minima ratione. Ea dolorem tempora aut quidem dolores At voluptas placeat et rerum optio? Sed ratione nostrum nam quibusdam ipsum eum eaque porro cum sapiente enim quo blanditiis accusamus est perspiciatis voluptas. Est repellendus sint in rerum laboriosam et quae voluptas nam consequuntur magnam aut aspernatur odit qui fuga molestiae ab fugit deserunt. Ut autem veritatis et aperiam odit eum numquam magni. Est consequuntur quia ad exercitationem modi ad molestias consequuntur. Eum dolores perferendis ut reprehenderit excepturi eum omnis dicta."}/>
        <Section id={"career"} setIsVisible={(str) => setIsVisibleSection(str)} isVisible={isVisibleSection === "career"} title={"Careers"} description={"Lorem ipsum dolor sit amet. 33 alias maxime et dolores temporibus ut nemo sequi qui omnis dolores? Et minima minima et delectus sequi qui dicta omnis aut commodi culpa eum nisi galisum. Ut voluptatem consequuntur ab eaque ipsa At nisi fugit. Ut mollitia consequatur ut culpa iusto qui optio eaque ut repellat deserunt et ipsum assumenda est odit vero. Et rerum voluptas in velit laboriosam At sint quos et perspiciatis aliquid ut illum voluptatem non dolorem quaerat ut minima ratione. Ea dolorem tempora aut quidem dolores At voluptas placeat et rerum optio? Sed ratione nostrum nam quibusdam ipsum eum eaque porro cum sapiente enim quo blanditiis accusamus est perspiciatis voluptas. Est repellendus sint in rerum laboriosam et quae voluptas nam consequuntur magnam aut aspernatur odit qui fuga molestiae ab fugit deserunt. Ut autem veritatis et aperiam odit eum numquam magni. Est consequuntur quia ad exercitationem modi ad molestias consequuntur. Eum dolores perferendis ut reprehenderit excepturi eum omnis dicta."}/>
    </div>);
};

export default Instamart;