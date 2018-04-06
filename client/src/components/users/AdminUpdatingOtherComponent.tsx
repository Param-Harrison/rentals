import { Alert, Button, Form, Input, Loading } from "element-react";
import { observer } from "mobx-react";
import * as React from "react";
import { AdminUpdatingOther } from "../../state/authenticated/states/users/admin-updating-other";

@observer
export class AdminUpdatingOtherComponent extends React.Component<{controller: AdminUpdatingOther}> {
  public render() {
    return (
      <div>
        <h1>
          Update user account
        </h1>
        {this.props.controller.pending && <Loading fullscreen={true} />}
        <Form model={this.props.controller} {...{onSubmit: this.onSubmit} as any}>
          {this.props.controller.error && <Alert title={this.props.controller.error} type="error" />}
          <Form.Item label="Name">
            <Input
              value={this.props.controller.name}
              onChange={(value: any) => this.props.controller.name = value}
            />
          </Form.Item>
          <Form.Item label="Email address">
            <Input
              value={this.props.controller.email}
              onChange={(value: any) => this.props.controller.email = value}
            />
          </Form.Item>
          <Form.Item label="New password">
            <Input
              type="password"
              value={this.props.controller.newPassword}
              onChange={(value: any) => this.props.controller.newPassword = value}
            />
          </Form.Item>
          <Form.Item label="Confirm new password">
            <Input
              type="password"
              value={this.props.controller.confirmNewPassword}
              onChange={(value: any) => this.props.controller.confirmNewPassword = value}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={this.props.controller.cancel}>Cancel</Button>
            <Button type="primary" nativeType="submit">Update</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  private onSubmit = (e: Event) => {
    this.props.controller.update();
    e.preventDefault();
  }
}
