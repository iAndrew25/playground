const matchVariabesRegex = /(({{)(\w*)(}}))/g;
const phrase = "{{who}} is {{where}} {{when}}.";

const t = (str, mapper) => {
	if (mapper) {
		return str.replace(matchVariabesRegex, match => mapper[match.slice(2, -2)]);
	} else {
		return str;
	}
};

console.log(t(phrase, {
	who: 'My mom',
	where: 'at home',
	when: 'right now'
}));