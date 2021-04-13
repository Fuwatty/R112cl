const show=selector=>

	{

	[].forEach.call(document.querySelectorAll('.cx'),x=>

		{

		var flg=selector!="" && [].indexOf.call(document.querySelectorAll(selector),x)==-1;
		x.style.display=flg?"none":"";

	  	}	);

	 }

window.addEventListener('DOMContentLoaded',()=>

	{

	[].forEach.call(document.querySelectorAll('[data-target^=c]'),x=>

		{

		x.addEventListener('change',e=>

			{

			var selector=[].map.call(document.querySelectorAll('[data-target^=c]:checked')||[],x=>"."+x.getAttribute('data-target')).join("");
			show(selector);

		   	}	);

		 }	);

	}	);