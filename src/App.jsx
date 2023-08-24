import { emojis } from "./constants/emojis";

const selectedRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default function App() {
  const selected = selectedRandomElement(emojis);

  const handleCopy = (event) => {
    console.log(event);
    if (event.target.innerText !== selected.emoji) {
      alert("Wrong emoji. Try again");
    } else if (event.timeStamp > 3000) {
      alert("Too slow. Reset and try again");
    } else {
      alert("Winner Winner 🎉🎉🎉! Chicken Dinner !");
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="bg-brand-coal text-brand-beige h-screen">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12 pt-12">
        <h1 className="text-6xl">{selected.emoji}</h1>
        <p className="text-4xl font-semibold">copy this emoji</p>
        <ul className="flex items-center justify-center flex-wrap gap-12">
          {emojis.map((emoji) => {
            return (
              <li key={emoji.id} className="text-5xl" onCopy={handleCopy}>
                {emoji.emoji}
              </li>
            );
          })}
        </ul>
        <button className="button" onClick={handleReload}>
          Reset
        </button>
      </div>
    </div>
  );
}
