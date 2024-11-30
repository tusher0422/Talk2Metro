import '/auth/firebase_auth/auth_util.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'signin_page02_widget.dart' show SigninPage02Widget;
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

class SigninPage02Model extends FlutterFlowModel<SigninPage02Widget> {
  ///  State fields for stateful widgets in this page.

  // State field(s) for loginmail widget.
  FocusNode? loginmailFocusNode;
  TextEditingController? loginmailTextController;
  String? Function(BuildContext, String?)? loginmailTextControllerValidator;
  // State field(s) for loginpass widget.
  FocusNode? loginpassFocusNode;
  TextEditingController? loginpassTextController;
  late bool loginpassVisibility;
  String? Function(BuildContext, String?)? loginpassTextControllerValidator;

  @override
  void initState(BuildContext context) {
    loginpassVisibility = false;
  }

  @override
  void dispose() {
    loginmailFocusNode?.dispose();
    loginmailTextController?.dispose();

    loginpassFocusNode?.dispose();
    loginpassTextController?.dispose();
  }
}
