# React App Showcasing a Simple SAP CDC (Gigya) Login/ Register Flow

This app aims to showcase a simple SAP CDC (**Gigya**) login flow using the **WebSDK**. It highlights the following scenarios:

## Registering a New Account

![Gigya Register](https://user-images.githubusercontent.com/19891236/98576182-1bbfa680-22b2-11eb-9b89-3a23e65230b6.gif)

## Editing your profile after login

![Gigya Edit Profile](https://user-images.githubusercontent.com/19891236/98576225-2bd78600-22b2-11eb-986a-352c5210fa12.gif)

## Simple Login

![Login](https://user-images.githubusercontent.com/19891236/98576260-34c85780-22b2-11eb-8c04-b60aeae6b271.gif)

## Login Using a Social Media Account

![Gigya Login Social](https://user-images.githubusercontent.com/19891236/98576292-3d209280-22b2-11eb-9f9a-74c08a91e202.gif)

## To Run The App

This app was run in VS Code using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. You can run it on any local server but it's important to note that for the Gigya SDK to work correctly you must run the app from a url that includes 'localhost'. If you run it from a url like this '127.0.0.1' it will not work correctly. For more information see the [Gigya API+SDK documentation](https://developers.gigya.com/display/GD/APIs+and+SDKs)

**Dependencies**

```Console
npm i @material-ui/core @material-ui/icons react-hook-form react-router-dom
```

After cloning the repository, navigate to the folder and run the app as per below:

```console
git clone https://github.com/brandoncaulfield/sap-customer-data-cloud-gigya-react

cd sap-customer-data-cloud-gigya-react

npm start
```

## Documentation

Gigya have some fantastic documentation [here](https://developers.gigya.com/) for the WebSDK and you can find the specific documentation used in the app below:

- [Getting Started - Gigya Web SDK](https://developers.gigya.com/display/GD/Web+SDK)
- [accounts.register](https://developers.gigya.com/display/GD/accounts.register+JS)
- [accounts.login](https://developers.gigya.com/display/GD/accounts.login+JS)
- [accounts.logout](https://developers.gigya.com/display/GD/accounts.logout+JS)
- [accounts.showScreenSet](https://developers.gigya.com/display/GD/accounts.showScreenSet+JS) (For the 'Edit Profile' screen set)
- [socialize.login](https://developers.gigya.com/display/GD/socialize.login+JS) (Different params used for each social media provider)

## Dependencies
