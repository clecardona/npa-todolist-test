import Button from "./shared/Button";

export default function Welcome() {
  const url = "https://clecardona.com/summer_camp/eika/welcome_square.jpg";

  return (
    <>
      <img className="img-main" src={url} alt="img-main" />

      <h2 className="hej">Welcome! </h2>
      <div className="description">
        Une to-do list est un procédé qui se veut simple et efficace pour gérer
        les tâches d'un projet. Ces tâches peuvent être indépendantes ou devoir,
        au contraire, être accomplies dans un certain ordre. Un chef de projet
        informatique y notera par exemple les bogues à corriger et les dates de
        début et de fin de problème. Un dispatcher (autre exemple) y notera les
        tâches à réaliser au sein de son quart.
      </div>
      <Button />
    </>
  );
}
