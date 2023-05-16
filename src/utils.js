// Random utility stuff
export function distanceActive(o1, o2, _distance) {
	var realDistance = Math.sqrt((o1.x - o2.x)*(o1.x - o2.x)+(o1.y - o2.y)*(o1.y - o2.y));
	if (realDistance < _distance) {
		return true;
	} else {
		return false;
	}
}