import React from "react"
import sunny1 from "../../images/sunny/1.0.png"
import sunny2 from "../../images/sunny/2.0.png"
import sunny3 from "../../images/sunny/3.0.png"
import sunny4 from "../../images/sunny/4.0.png"
import sunny5 from "../../images/sunny/5.0.png"
import sunny6 from "../../images/sunny/6.0.png"
import focus1 from "../../images/focus/1.png"
import focus2 from "../../images/focus/2.png"
import focus3 from "../../images/focus/3.png"

function IOSContainer() {
  return (
    <div>
      <h1 className="h1-projects-container">iOS Projects</h1>
      <h2 className="h2-projects-container">Sunny: Weather Forecast</h2>
      <p className="p-projects-container">
        Sunny is an app which shows current, next 24 hours and next 7 days
        weather forecast in places around the world. By tapping on a specific
        hour or day you'll see a detailed forecast. Also you can find a graph
        inside specific day screen and change the parameters which you would
        like to be shown. On the search screen you can add up to 5 places. On
        the setting screen switch between measurement systems the way you want
        to.
      </p>
      <div className="projects-photos-container">
        <img class="img-projects-container" src={sunny1} alt="Sunny1" />
        <img class="img-projects-container" src={sunny2} alt="Sunny2" />
        <img class="img-projects-container" src={sunny3} alt="Sunny3" />
        <img class="img-projects-container" src={sunny4} alt="Sunny4" />
        <img class="img-projects-container" src={sunny5} alt="Sunny5" />
        <img class="img-projects-container" src={sunny6} alt="Sunny6" />
      </div>
      <h2 className="h2-projects-container">Focus: Meditation & Work</h2>
      <p className="p-projects-container">
        Focus is an application without in-app purchases that is designed to
        help you concentrate on a specific task for a certain amount of time.
        You can choose one of two sections. “Meditation” allows to set the timer
        from 10 minutes to 3 hours and “Work” - from 10 minutes to 8 hours. To
        provide destruction-free experience, there is no option to pause the
        timer or quit the application, otherwise the task is fails.
      </p>
      <div className="projects-photos-container">
        <img class="img-projects-container" src={focus1} alt="Focus1" />
        <img class="img-projects-container" src={focus2} alt="Focus2" />
        <img class="img-projects-container" src={focus3} alt="Focus3" />
      </div>
    </div>
  )
}

export default IOSContainer
