const path = require("path");
const getPublicPath = require("./utils/getPublicPath");

module.exports = () => `<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="${getPublicPath("normalize.css")}">
	<link rel="stylesheet" href="${getPublicPath("styles.css")}">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=cyrillic" rel="stylesheet">
	<link rel="icon" type="image/png" sizes="192x192" href="https://levelupworlds.com/dist/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="https://levelupworlds.com/dist/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="https://levelupworlds.com/dist/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="https://levelupworlds.com/dist/favicon/favicon-16x16.png">
	<title>Levelup Animate</title>
</head>

<body>
	<div class="container">
		<div class="wrapper">
			<img src="${getPublicPath("logo.png")}" width="128px" height="128px" />
			<div class="header">
			<h1 class="title">Levelup Animate</h1>
			<p class="description">Творческая студия анимации и мультипликации. На сайте ведутся технические работы</p>
			</div>
			<div class="socials">
				<a class="item" target="_blank" href="${
          process.env.VK
        }"><img src="${getPublicPath(
  "vk-social-network-logo.png"
)}" width="20px" /></a>
<a class="item" target="_blank" href="${
  process.env.FACEBOOK
}"><img src="${getPublicPath("facebook-logo.png")}" width="20px" /></a>
<a class="item" target="_blank" href="${
  process.env.INSTAGRAM
}"><img src="${getPublicPath("instagram.png")}" width="20px" /></a>
<a class="item" href="mailto:${process.env.EMAIL}"><img src="${getPublicPath(
  "mail-black-envelope-symbol.png"
)}" width="20px" /></a>
			</div>
		</div>
	</div>
</body>

</html>`;
