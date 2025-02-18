import React from "react";
import Card from "./Card";
import Plans from "./Plans";

function About() {
  return (
    <div>
      <Card>
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold my-2">About this project</h1>
          <article>
            <p className="text-gray-500 text-md my-4">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p className="text-gray-500 text-md my-4">
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
          </article>
          <Plans />
        </div>
      </Card>
    </div>
  );
}

export default About;
