function Init(){
     //Initialization function. Tells SF which Query String Variable
     //has the ID of the form, and the name of the list to read data from
     $("#storyForm").StratusFormsInitialize({
     	queryStringVar: "formID",
     	listName: "Stories",
     	completefunc: function() { 
		}

     });
 }
	 
function SubmitForm(){
			$("#storyForm").StratusFormsSubmit({
		     	listName: "Stories",
		        completefunc: function(id) { 
		        	var msg = "Your user story was created.  Story ID = " + id;
		        	$("#alertMessage").removeClass("alert alert-danger bg-danger");
		        	$("#alertMessage").addClass("alert alert-success bg-success");
		        	$("#alertMessage").addClass().show().text(msg).fadeOut(3000);
		        	document.getElementById("storyForm").reset();
				}
		     });

	}
function FieldValidator(){
			bootstrapValidate(['#StoryTitle','#Story',"#Acceptance"], 'required:Please enter all the required fields!');

}

$(document).ready(function() {
		tinymce.init({
		selector: "textarea#Acceptance",
		plugins: "lists",
		menubar: false,
		toolbar: "numlist",
		lists_indent_on_tab: true
		});
		
		//$("#Acceptance").trumbowyg();

		FieldValidator();
				

		$('#submitButton').click(function(){
			if ($('#StoryTitle').val().length > 0 && $('#Story').val().length > 0 ){
				
				tinyMCE.get("Acceptance").getContent();
				tinyMCE.triggerSave();				
				SubmitForm();
			
			}
			else{
				var msg = "Please complete all required fields!"
				$("#alertMessage").addClass("alert alert-danger bg-danger");
				$("#alertMessage").show().text(msg).fadeOut(3000);
				
			}
		});

});
