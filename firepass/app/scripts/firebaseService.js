app.factory("firebaseConnect", function($firebaseArray, $firebaseObject, db) {

	var ref = new Firebase(db);
	var grupposTab= $firebaseArray(ref);

	var rif = new Firebase(db+"/gruppi");
	var gruppiTab= $firebaseArray(rif);

	var raf = new Firebase(db+"/credentials");
	var credentialsTab= $firebaseArray(raf);

	return { 
		gruppos: grupposTab,
		gruppi: gruppiTab,
		credentials: credentialsTab
	};
})