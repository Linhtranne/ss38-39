function set_color() {
    let random_color = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + random_color;
  }

  genNew.addEventListener("click", function () {
    set_color();
    animateJoke();
  });

  set_color();

  function get_random(a) {
    return Math.floor(Math.random() * a);
  }

  let jokes = [
    "All vampires keep their money in a special place—the blood bank.",
    "What do you call someone who can’t stick to a diet? A desserter.",
    "I only seem to get sick on weekdays. I must have a weekend immune system.",
    "You can tell it's a dogwood tree from its bark.",
    "What do you call a sheep that knows karate? A lamb chop.",
    "What does a dad get in their stocking if they’ve been naughty? Char-coal.",
    "Why did the scarecrow win an award? Because he was outstanding in his field",
    "What do you call a cow with no legs? Ground beef.",
    "What has ears but cannot hear? A cornfield!",
    "I don’t get why Marvel doesn’t use the Hulk to advertise more. He’s basically one big Banner.",
  ];

  function set_joke() {
    let random_joke = get_random(jokes.length);
    let joke = document.querySelector(".display_joke");
    joke.innerHTML = jokes[random_joke];
  }

  function animateJoke() {
    let joke = document.querySelector(".display_joke");
    joke.classList.remove("animate__animated", "animate__fadeIn");
    void joke.offsetWidth; // Trigger reflow to restart animation
    joke.classList.add("animate__animated", "animate__fadeIn");
    set_joke();
  }