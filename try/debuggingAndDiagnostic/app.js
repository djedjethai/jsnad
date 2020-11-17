const fc = (n) => {
	if (n === 0) throw Error();
	debugger
	fc(n-1);
}
fc(100)
