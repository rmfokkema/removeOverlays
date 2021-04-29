const pointLeft = 'iVBORw0KGgoAAAANSUhEUgAAAGQAAAA0CAYAAAB8bJ2jAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABkoAMABAAAAAEAAAA0AAAAAAV1P5QAAAIxaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj45NzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xODc8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+ChO/zOQAAAvXSURBVHgB7ZgJsJZVGccRBFEUELUMFQzBDRERDJdCs1yLMQ03SCUzbTLBFdGkMMuaXLDFcWNGGGhxIdAotDIRUEsDUUoFRRBQQJDVDTf6/e58D575+pb3Xu5370fwn/ndc973PctznnPOc853mzTZoqrywFZVZU39GOOYPgO7Q5dcflvSD2AtLIV5uXQRaVXp/2FCdPYucCAcCQfBvuCElNLrfJwJU+AReBHegkbVpjghzfHY3tAHesL+sB+0hbrqIyo+B2NhDCyDRtGmNCGt8NDZcAb0gu2gkHSuoWk2PA9zYTn43jqGMyewB7iLmkKql3i4HUbCmvTDlvwnHnA3PArrC/Ax7xbCg/BDOB7aQ0soJiehHZwAd4JnSX7bT/LuZMifMF5t3jqX4a+CfIcZYkbAsbAzbIycwMvAXZX242Q/AN1hs5fh9CrwdhROep/8eHAXtIH61qdpcBgsgejT9E24GirRJ81+omo+QwZj5s0QIcNb0FAwNOmkSsozxr5OgzT0TeP5SngCyqkzBbzxufu2BW9wq8Hd7hnnJLsjXXBVra2x7gJ4F2KVTiXvABta7sR/QthhuhIGQTMoJG97P4f8XZa2Yd7JmQjdodG1DRbsCB1Ag04BQ8JomALvQAxgOvmO0FjSzmtBB4ZNprdCa0i1Dw+TIS1XLv8C5TtCjeoasqzXIocr2t8G4tZsAxpqKq4YBxX4LDuBMdvbTjE7FvOtLzgpja3DMeAGMA09RuYamAnuYH/DHABqBUyCObA9eG13clyM7aE36AP1S7gY1hdzhIV0tA79LNiZq9mGbETn6lQdH53ZoZNkzJdSbfO5rN6nxHngIKtFjtuLxmBwrEo7XeX6Jf47sJK858/foJh68uG3sDcshCNyKcknchKOguHwMLhC34Ny267cd6+PHl62pbHzYAZo8L3gCrkfLBdt3U2+WJzmU6NKZzuGsDU/1cGdMlg4JNeGP1pPtbwTEHInjIATwfBTThqxDlbDqlwa+TU8u2XfgOWwLEnXkndViZP0IajfQeyqWeS9fmpoNcpF9DRcAmeA/0tLZfRwt7ySviyQ/wfv9KFhzB1yX0zIrjzoEONayJU8E3SmzjXVwalznQAbTKmLEwfSxumgbOtqWORDLWSYNIy4CxtC7pBBcDMcAobuY+DMXL49aTnZxtvghHSBDRHhOh5i2+nk66FzWoB8pbQHDc+B6H8MeZ2bVcZgV+oT4DXSWN5YcpXHDfGKDEbsSBmjgWOfATX/cXAA7gRfGkbOh4bUVXQWk+Hd/YAMnbegzMlwH7hro77pPbAdNIba0Kk3Qu24LYMB3kofypV/ldRjo0k3eA1sxJjnrDWU0hVi/zdl6Njd4yXA8sX4Dd+M442hcXSqXQ9DHAnF7GjOB48Ky6+Grg7uXfBwVc7wPjW5hvlzEN3slevK3TEyQ7ffpcyFSbnHyd8Ns5N3/cmPBQ/WhpaLW+0JLc2UkBcaJ0K5W6TmRvUH0lhtL5A/GTykKq1v0UH0OzpDZ1+hjAOIOoansLMdeW+J8c30WTgcGlJxHi+mU8+3crqBAtrq5HzZLeXu+Cn0hvawL7jtXHGyFFaBV1n/QeaOWgeeN+KtysZM43eEaeTJ1nRomkojDk1ezE/yhbLf4OWN0Dr30XPvEtAmtQKGQkdwQakD4UFwfL8C7a209I1yoWjLHB9KKLWpZodE2T5kpoOOyopOjwlxYgM7CTSwGNaNvp4h780u1VY86FTPDNuIsgvJHwGFNICXUS5NJ/C+W6EK9fzu8lz/js0IUE7XUkA7XdSnpIfOFF4cCf3A1Xgw7AilpMOkPuR5MhX+AgvA25/nWS+IXUG25hfyOaSeHYWUrjIXiAenOglcdCPhDpgLlVD8DvJ87pChA20MrU8nxJdu/1EwBnaDTmAcbA+fAh3TChykdZuBE2LnWSfG1WA9HZ1/Pd2Vd2dDMU3ig/f7/xQpoF19c9/cvcPAMRna9gIXmPUHwhQYDy/CAlgG+bK9tvA2+Psiiwzpod0jUyLVd6G1kamPNHZLudS+jgUd5eQY2kbBX0GDfBdYZhbcBTq63K3lAsq44qy/GLqAagffBx0fbUdqH6+A4XoaPASGt8nwLPhtJhwGWTSAQtH2mAwVfpwrr92e4w0uQ8oDEEaPylngSvG8OAH6wRehO6ThiseCsu6F4EqOdl2pM+BOOBSUK/YacIfFxEX5cqk2ZdGpFIq27Luc4palvY63wdWTHuPfC8vJd91ICwxFoyG9IIRDInXnDYeQk/wFOB9ugUnwPCyEFeDEWsf/AvwL/O1TbndSpEb9+Rv9/jr3rlTyi1z5VaRdPQcaWk5AHLyPkjeG10VtqXQuDIKOSQMO7Dlwgg6EncArqOfJIvBQXwNTc5DUqBl/LbszWN76K8FJcjdlledU6K3IFEnd2Tvkvhm6PyxSrqKvL6L1WEE/qUNPrtRvwsykHdtz8K7I/SDOsU7kx0H0N4N8a6ikrqPx6O/SMh25MCfmyr9MukeZ8hX5PJBWw+BRtejB3Xw8PAJRP9K/884zp5B24+VssOwS6AaV1Cgaty931VlQSm34+BRY/gmo9GKhi//VIbzyANMIQ4hhpZS8IZ0J3n7c0tYLjO8DwOtpKRmmrGOo6l2q4EZ+a0H9xyD6OrpMe7vwfUGu/ARSQ1iDy98eaRh5kuceeVZo6HHggTcXYgIinc6786AVZNE9FLKug++ZpUIdy3Sg3ksQfbk7S8nFaKi1/G2lClb6m9e75RAOXkHeFeIVcDzMh48hvkfq9h4IO0BWuSOiLw9OJ8VV7K7zrKlPHU5jcYOcTL7cztWGGOfV5BtVfem90OoP50eqwVPA0OTtpzbqRGHDWrSVph/w/hbwdlVfupyGoo+fZWg0LgAfUfbUDOUrXqQjPdwKc8BdEoOJdBrvnLhtoLYyNM2AaMvUa6yDj3fmz4D6UHpAu0u+VKZRb1h/Am1ZBd4Oq0aGoAshHGU6DtpCbdWUCp4vr0O054AHQzc4EbzRxDfDV9aziKJF9T2+xGS7EBxTKWmLdmmHu7guY6Va5XQjTYeT/NVc7kAsZMnevPw9RFy2vaXwNUi1Pw8Lwe9OXAfYGH2VyvYT9g/N0NiQpPztGco3eJE/JwZmGVBqoDe3iyGcHI6ZzrtD04K5vKt3MljuPajrzetz1HUBeFmIPheTd8JLSXungnW8yp8OVad0Qs6qhXXHUPYRCIeEk111uxZppyPv/Q1k2TehC9RG3qbGQFxZ075dFAeUaexsvnupsN4rsMHOrXmoFmlYyJXngEvpYD5eAV+H9HppPB4GD0Ex9edDhET7XVasYN57+7wSToL0ovEuzy3Ba/Tu4GH9FLwGTto6+BiagZNv/fD9RPJLoOpknI9D0RtXftzXYA/sI8DJ8ld3ujI9C4ZAayglD9PYHda/Hsr9HtmDMjdBfp9O5o+gK3jldWJSm8rlHWd3qEq1wappEINYRV5nHQVHw2UwBfIHbfweDftAOe1EAduIPl4mr7OLybNmEMyHqGPqyh8KG0INeeVunQ5p2WJ5J/cSqGp9HusMH8UGkf9+HmX7ZRyR/xYfl7TtxJ5WpK6h5RR4EtI+3+N5JOwFxeTC6gMD4Qfg76yxcD94AbgL3E09YZPQCVjpyk0dUSg/hzIHZxyRK/mBpE3j+TVF6h7G+wnwIaT9unuPg81SezLq4fAMeODNg0mwHHTSajgesqg3hZ6GcK6TMRyaQipvRrfDWoiypvPhItgeNnttjQfagfd2bycLQCf9G1pAKTXn43cg/cH2Ds8XJ5Vs14m9F5zkdCJW8nwz7AlbVMADXlNng07zdmKcLiRvTIadP0Lq4Dd5vhT2Bw/fEfAc5IcmzxYnqBdsUQkP6Og7IJw8l/wFYKjpADrwHJgIHr5RLtK3eLcI8kNS+v0+vhebaD5tUb4H3CX5Nx+vx2+ADg/n1iZ9nno3QQ9odLnqNjV1xmB/n5wEhc6RNbz3MuBuaA3bgeU8xD8Azwqv1vPgcZgFhsAt2ggP6FwP4/Gg41+FB+HbsC/k36BceP62qHr9Fysq8U/gzJhBAAAAAElFTkSuQmCC';

const pointRight = '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';

let css = `
#r123 {
	position: fixed;
	bottom: 14px;
	right: 14px;
	z-index: 1234567890000;
}

#r123 button#b123 {
	width: 150px;
	height: 90px;
	cursor: pointer;
	border: 2px solid #555;
	border-radius: 6px;
	border-top-color: #ddd;
	border-left-color: #ddd;
	background-repeat: no-repeat;
	background-position: 50% 25%;
	background-image: url(data:image/png;base64,` + pointRight + `),linear-gradient(#efefef,#aaa);
}

#r123 button#b123:active {
	border-color: #555;
	border-bottom-color: #ddd;
	border-right-color: #ddd;
}

#r123 span.r123 {
	position: absolute;
	left: 50%;
	bottom: 4px;
	width: 100%;
	color: black!important;
	font: bold 0.9em monospace!important;
	text-align: center;
	transform: translateX(-50%);
}

#r123 button#b123:active span.r123 {
	color:white!important;
	text-shadow: -1px -1px 1px black;
}

#r123 img.r123 {
	position: absolute;
	top: -7px;
	left: -7px;
	cursor: pointer;
	visibility: hidden;
}

#r123:hover img {
	visibility: visible;
}`;

let style = document.createElement('style');
style.setAttribute('type', 'text/css');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

const INIT = {go:false};

function init() {
	if (!INIT.go) {
	b123.removeEventListener('click', init);
	b123.addEventListener('click', doNext123);
	INIT.go = true;
	}
}

let div = document.createElement('div');
div.setAttribute('id', 'r123');
div.innerHTML='<img class="r123" onclick="this.parentElement.remove()" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAQoAMABAAAAAEAAAAQAAAAACaIX+wAAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xODwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KINZMMgAAAZhJREFUOBGlUz1rAkEQnQsqnIgiWFgkeHCgBBQSBCstxdo6+Cu0FgtBGwnp/QFXB2ws/AMiQWwsDCbqFQHBMnYvMwsr55pAQgbezc3He7c7t2vRpdmcchj3DJch9sp4YbwxPhk/2g1XHhk+AwYkJzXp+dbuOPvMMIlmLD3Se2bXHClyKpVCLpeDbdsnYigUguu6SKfTOie9wlEW5ecTQxXz+TxGoxGGwyESiQQikQg6nQ4mkwkqlYoWEC8c4dIt44OhivLlZrOJ/X6PRqOBWq2G3W6Hfr+PeDweFBCOcOlBk7WPRqNqBYvFAtPpFJ7nmWQtJFxqa2LQZ7NZrFYr+L6PUqmkCaZvX4mCaZZlUblcpnA4TACoWq0SD9JsO8UXW5AvLpdLDAYDtFotrNdr1Ot1sLC5ArWFsyE6joPxeIzZbIZMJoNkMqni+XyOYrEYFFBDlC28Mzy9nkKhQMfjkbrdLm23WzocDtTr9Wiz2RD/Yt0mXjjCVXY6SLFY7NuJG/mzg6RF/nWUtcifL5OlmQFv87vD+NV1/gJ/4eb57kT1VQAAAABJRU5ErkJggg==" /><button id="b123"><span class="r123">click to remove</span></button>';
document.body.lastChild.insertAdjacentElement('afterend', div);

const r123 = document.getElementById('r123');
const b123 = document.getElementById('b123');

var overlER123 = [];
let ell=document.querySelectorAll('body :not(script):not(style):not(#r123)');

if (ell.length==0) {
	div.firstChild.firstChild.innerText = 'no items found!';
} else {
	ell.forEach(function(item){
		let s=window.getComputedStyle(item);
		let z=parseInt(s['z-index']);
		if(z>11) overlER123.push([z, item, s.display]);
	});
	overlER123 = overlER123.sort(function(a, b){return b[0] - a[0]});

	b123.addEventListener('click', init);
	b123.addEventListener('mousemove', trackPointer);
}

var LR;
function trackPointer(e)
{
	let lr;
	if (e.offsetX<(e.srcElement.offsetWidth/2-5)) lr=-1;
	if (e.offsetX>(e.srcElement.offsetWidth/2+5)) lr=1;

	if (LR!==lr) {
		b123.style['background-image']='url(data:image/png;base64,' + ((lr==1) ? pointRight : pointLeft) + '),linear-gradient(#efefef,#aaa)';
		b123.style['background-repeat'] = 'no-repeat';
		b123.style['background-position'] = '50% 25%';

		b123.lastChild.innerText = (lr==1) ? 'click to remove' : 'click to reload';

		LR=lr;
	}
}

var N=0;
function doNext123()
{
	if (LR==1 && N<overlER123.length) overlER123[N++][1].style.display = 'none';
	if (LR==-1 && N>0) overlER123[--N][1].style.display = overlER123[N][2];

	b123.lastChild.innerText = ((N==overlER123.length) ? 'all' : N + (N==1 ? ' item' : ' items')) + ' removed';
	if (N==0) b123.lastChild.innerText = 'click to remove';
}
