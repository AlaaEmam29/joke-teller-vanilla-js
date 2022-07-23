const btn = document.querySelector(".btn")
const audio = document.querySelector(".audio")
const URL=  `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,sexist,explicit`
let joke = ''


const fetchGetJokes =async () => {
try
{
const response = await fetch(URL);
const data = await response.json();
if(data.setup)
{
    joke = `${data.setup} ... ${data.delivery}`
}
else
{
    joke = data.joke

}
return joke;
}
catch (error) {
console.log(error);
}
}
const toggleBtn = () =>
{
    btn.disabled = !btn.disabled;
}

const tellMeJoke = async () => {
    const joke = await fetchGetJokes();
    const jokeString = joke.trim().replace(/ /g, '%20');
    VoiceRSS.speech({
        key: 'b32671bbd67c4b398bb37d6e1983e8cd',
        src: jokeString,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
    console.log(jokeString);
}
btn.addEventListener("click", function(){
    tellMeJoke()
    toggleBtn()})
audio.addEventListener("ended", toggleBtn)