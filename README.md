# Stream MIDI Counter

Ever wanted to show how many notes you hit on your stream? Well this project is for you!

## Installation

First open the Backend folder and run

```shell
npm install
```

When all modules are installed we need to know what devices you want to count.

```shell
node ListInputs.js
```

With the list of devices, take the device names you want to count towards the counter.\
Now with the list of devices you want, open the config.json and add the devices you want to be counted.\
For example:

```json
{
  "Devices": ["TD-50"]
}
```

Now that we know what devices to look for simply run

```shell
node index.js
```

Now to get the overlay into your streaming platform, for this we will be using OBS. Launch OBS and add a new Browser Soruce. Select local file, and select Frontend/index.html. Set the size and press ok. \
Thats it!

## FAQ

#### Is there a way to ignore certain notes

Not at the moment, this can be planned later on in the roadmap.

## Contributing

Pull requests and forks are welcome!
