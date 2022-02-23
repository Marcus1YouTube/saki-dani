function openDiscordInvite() {
    window.open("https://discord.gg/abjyRPYDJz", "Discord Invite", "width=500, height=500, top=150, left=500");
}

function openRickroll() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "Rickroll", "width=500, height=500, top=150, left=500");
}

const rickRollParameters = new URLSearchParams(window.location.search);

if (rickRollParameters.get("rickroll") === "true") {
    var acceptRickrollPrompt = prompt(" NA JÓVAN MÁR HOGY SIKERÜLT EZT MEGTALÁLNOD MÁ \n Jó akkor ha eddig kutattál, akkor itt a videó... DE AKKOR ÍRD IDE HOGY 'IGENIS URAM!!'")
    if (acceptRickrollPrompt == "IGENIS URAM!!") {
        openRickroll()
    }
}