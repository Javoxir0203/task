import Baner from '../_components/baner';
import Kurs from '../_components/kurs';
import Mark from '../_components/mark';
import ServicePage from '../_components/service';

const page = () => {
	return (
		<div>
			<Baner />
			<ServicePage />
			<Kurs/>
			<Mark/>
		</div>
	);
};

export default page;
