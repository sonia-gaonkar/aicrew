import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent{
  constructor(private toastr: ToastrService) {}
  ngOnInit() {
  }

  tableData = {
    "headers": [
      "Query",
      "Summary",
      "Action"
    ],
    "data": [
      {
        "properties": [
          {
            "key": "I am writing to complain about recent changes to my insurance policy that I was not informed about. On [date], I received a notice in the mail stating that my premium had increased. I was surprised by this, as I had not been notified ofany changes to my policy. I called your customer service department to inquire about the increase, and I was told thatthere had been some changes to my coverage. I would like to request that you reconsider the changes to my policy. If you are unable to do so, I will have to consider switching to another insurance company. Thank you for your time and attention to this matter. Sincerely, [Your Name]"
          },
          {
            "key": "Improper communication"
          },
          {
            "key": "Assist in Response"
          }
        ]
      },
      {
        "properties": [
          {
            "key": "Dear [Insurance Company Name], I am writing to request that you send me proper  reminders when my insurance policy is about to expire. In the past, I have not received any reminders from your company, and I have had to rely on my own memory to keep track of my policy expiration date. This has led to me being late on my payments on ... before my policy is set to expire.... This will ensure that I receive the reminder even if I am away from home or do not have access to my mail. I appreciate your attention to this matter. I look forward to hearing from you soon. Sincerely, [Your Name]"
          },
          {
            "key": "Customer service"
          },
          {
            "key": "Assist in Response"
          }
        ]
      }

    ]
  }


  showNotification(from, align) {
    const color = Math.floor(Math.random() * 5 + 1);

    switch (color) {
      case 1:
        this.toastr.info(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 2:
        this.toastr.success(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 3:
        this.toastr.warning(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 4:
        this.toastr.error(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 5:
        this.toastr.show(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      default:
        break;
    }
  }
}
