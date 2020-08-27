sap.ui.controller("ZVNSG_MAINTAIN_QUIZ.ext.controller.ObjectPageExt", {

	onClickActionZvnsg17_C_Quiz_QuestionsHeader1: function(oEvent) {},
	onClickActionZvnsg17_C_QuizHeader1: function(oEvent) 
	{
					var path = this.getView().getBindingContext().getPath();
			this.getView().bindElement(path);
	}

});