import Baner from '../_components/baner';
import Cards from '../_components/cards';
import Kurs from '../_components/kurs';
import Mark from '../_components/mark';
import ServicePage from '../_components/service';
import Work from '../_components/work';

const page = () => {
	return (
		<div>
			<Baner />
			<ServicePage />
			<Kurs/>
			<Mark/>
			<Work/>
			<Cards/>
		</div>
	);
};

export default page;
