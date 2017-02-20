	$(function(){
		$('tbody>tr').on("click",function(){
			$(this)
				.addClass('selected')
				.siblings().removeClass('selected')
				.end();
		});
		// 如果单选框默认情况下是选择的，则高色.
		 // $('table :radio:checked').parent().parent().addClass('selected');
		//简化:
		$('table :radio:checked').parents("tr").addClass('selected');
         //再简化:
		 //$('tbody>tr:has(:checked)').addClass('selected');

	})