import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({ Vue, options, router }) => {
  Vue.use(Element);
  if(typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
		router.onReady(() => {
			const { app } = router;
			app.$once("hook:mounted", () => {
				setTimeout(() => {
					const { hash } = document.location;
          if (hash.length > 1) {
            const id = decodeURIComponent(hash.substring(1));
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
          }
				}, 500);
			});	
		});
	}
};