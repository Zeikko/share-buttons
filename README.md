# Share Buttons 
Share buttons without tens of HTTP requests and tracking cookies to spy on your customers.

No dependencies.

Uses backend server for counting the total number of shares.

## Status
This is just a proof of concept. 

Do not use in production yet.

The backend server is not production ready.

## Supported Social Platforms
- Facebook
- Twitter
- LinkedIn

##  How to Use

1. Copy the contents of the css, js directories to your project.

2. Add the following to the head 
```html
<link rel="stylesheet" type="text/css" href="css/share-buttons.css" />
```
3. Add the following to the body
```html
        <div id="share-buttons">
            <a id="share-buttons-facebook" title="Facebook" href="#">
                <img alt="Facebook share" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABT0lEQVRYhe3VPUsDQRCA4XfO8yMYSGFjwB8gGKuA6IEgWIptjI1aRMTKVhBbQfEHSE4Qu8B19hZKgliktFTRLoWiESHm7rIWJqKgxZ3JxuKm2g9m52EWdqHLIQATS8dDfZ6f0Fk46cbvHCfjmwCm6243lNrQCbg3n4eBiqGz6E8RASKA+bd0KaLUJYa6QYkHLAOWFoDAVqmQ2/m6Zi3ak6hggLBX8PjkJ/ZD5n6LsB24vnIy9Y+hEit7eAaMoYjrAlRbg/R8PgbGdMhzggMUHBgi5c+FJC5V2W3uzgGpjgJ6ffbOndxta17Or7nAJoC1YI8jwQBtfQdEGAmaE7gDXg8nU1m7eFFYXQeYWTkaqNe8IoCC0Y4DgJRApTV5eagb/YNGOsQ5wD94iiNABOg6IOxfMGtlbdUOQNc7EAEigNlUnDaQms7CMe/tVWe9X+Mdqu9T+KdGj34AAAAASUVORK5CYII=" />
            </a>
            <a id="share-buttons-twitter" title="Twitter" href="#">
                <img alt="Twitter share" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB7ElEQVRYhe2Wv2sTYRjHP89715SC1WqXgOAPkIKDUCxNwUntH1AXG4zUpeLiIDSBTuqhFKHGDtKlgyAdWkNBXR1EQcVeYx1FBREHCy5FmgqaXO5xqIVgU/MexHS5L9xwPN97vh/ee3/BDksALkz73UHF7GllcGX/5y8Lw8NVF6BSlquoXmklgLtyIAl8M60MracYIAaIAdxmNFFYNPBSRQ+hMgS4KKsI3c0BEJ4TsoyQrVOcfJDtH998S9/xexzVThUzC40B7H6B6of5XConoheBUk3le3tp/XqttZAd+Ohox3uBZzatLeeAHAOYGxu4F0hwVOEmyDLIp/veqZ9/uwPn12mFyzadbefAvnR+qb+QSxUXxk58Ba79eerjqvbpxjnXUHYjIKwUcqmilRcIZWPEmgegnDyX98/YWC/NvGkTZbC5AGAQuZHJvz3YyLi2riOA9d0iykZ0RKn2/MtwdnIpKehEhJ6RADoQfZKZ8qc8T7d8d/7u4m7H4RGQjAJgtwqU1yK8UqFYWdv12PMkrC2P3PYPB2V5KEJvlHB7AKEvRN4ZYdXtKu3N3HpRdtxEV2DMcZFwKFBJA4mo4fYAkBB0VENGwaCJdgIAFFW79b6ddvw0jAFigBhgcx94qsiWi8X/VLWt80cr87bVb4U5j0cCYbrhAAAAAElFTkSuQmCC" />
            </a>
            <a id="share-buttons-linkedin" title="LinkedIn" href="#">
                <img alt="Linkedin share" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABfElEQVRYhe2Xv0sCYRjHP8+dmktEtRQtLf0HTQWRYAW1Rkujk1NLQxqBS9LS1NDS2NZakGE0tLQUhFuQ4RBUmEsEmj+eBuPUsjxIXpf7wnHv833vfb8f7h5eOOixBIBYehhlwGjyfSHH0UrVV8eobCGyZhRgYmgEeLaMhraRB+ABuAW4Admt380DZHmrTpGcXycQmAbJGQbQB/YWSwAkQkXQbDcBfJ0fkVliqQjYl1ALgc4YBsBGOIBqN3MduemBR2pMOpfyApr/5mWACBUZo1wZxdI5hFs3AG7eQImdhWuniqc+QOwWL5ZeJhm+a1rzROIiTPkjgzLy1+bdOQf67CybqVViZ4uOlwjlqel+p6XdASiXtlEOET0hfrrk+GpdmQGoSSMUmW6M9dUMgKi/qQo2dlc1A/APeQBuzgGLjePBlvqHJ3bTfNCZU6sf+bsN3ACMY/kLP7HaeHVFsfzR+rBjD/b+E3gAHkDPAb7+DeUclaLR5ID9bjTvN30CqcJoc6feSGQAAAAASUVORK5CYII=" />
            </a>
            <a id="share-buttons-googleplus" title="Google+" href="#">
                <img alt="Google+ share" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAEBElEQVRYhcWXTUxcVRTHf+e+GbC0VGNF0UKioQUGGKYUrCZNtKYRfDS2RtO4qAuj3XRha4IGN91r0hoXmiZNjRujtcS0ofIRsAk7+zVhGJgZS6MWqFo0RgulFJj3jgtmxuFjKBSk/828e+655/zu3HfO3IH7LAGI7dy2wXpg/MHVTLw5p3RAmpocD4BmTR6Ou+bQagL0TcTygWGzmknnk2ce258gbSLa47oyhGFSHBnLFEAtXSvKUdCiWTOfiNEvXTVPi3JsEQA6KMoHbq7zrWfck6dKsYFffK2ha5kWR+q2bhJ1TwNFs+cUfi1r6Q1GXqp8CJFMIaYBRDkjWROHvbfXmYlb8o0DewBBVKN24JSOx/eXd0VuAfTUVj7qtUyTogWC8xiwNmP0RcgA+NpDXaXNV0Ynvc4J4BUS1ZH4fF3WWN/p3r0WQKAj/IcKhwSeWG7yFADAVbsqT9FX53eT52Oj/QeTo/LWUEjhs+Umh7R3YMp1CjGSuSqEhsvV1Z/WBINTAEY4rkpDYvIY6MgMd9GLAKhnAHE+mh3OjOjYdNiEonblsyA/LIgrUlvWGuoEUJCYHRgB1iHmybLW7oGF9zq/Ut+AiVuDrsddOL+yA+hMkGsUHQLxCa4/tsv/SLpv3NLr/ua+4R93l+Sqk1U8O9bYjaxwTTA4lQIo6ez+PbGj9ZkAFPXNQloPoMpZdObpGVffB444k9nbROT72bGyN07kE0zrhAIKtGXePyjkJJ97aysKgY0L+S9GM7CNmCNAxnMQCCWfPZbnYCa/ewYobe2+jOjRDL63PcY9DhCtq9yq6IEVBwDwtYYbBd4D/k4z3wDZV9zS+3PErirDyFlWoAlBogx77Yoif1vfT+kTV+1N2VMmZzNqjSZLLFrvfw41zcBd7w4C1xUZBs0F5lSB43Xy/c19wx4AC887ETtQI6pfqMp5r8cdV8DXEo4kXk6iddWPo/HTi0kOoFAAWnA3v1QZCmxHZLsIxF0D0CfgTwWU+E6BhxeTfClaqPX2pw8t9BIwvnoAOvPcStvDV1T1ZdC/VgcAKmL1la+lG8rbw+ccx60CLvxfAP3ASRU+BGlUV+Y0JX9H39Ca8Zs7FP1qxQDEcApLisvaekp8z/TsU8ecBB1QtDBqBxojtt9OX/RU17U7ZW3hN1T5eLkAqZ/j2C5/tao5gLIbyJvjqXJiynXfDXSEZ1xQo3bgc+CtpSZO9gEDEKnfskddcwHl7XmTA4ju91oSjNX7/enmiWxpAG4uFSCp6SNQXgCsRfiXqJrz0fotLyYNVWdC/wDtywJYonJQ9+seu/K/Lif8tpoAgGzwqryZNs6/V4Dp/wW45xS5s5SFaqQ3NXD1EsLgUtYnL6X3Xf8Cvah7hyFCxywAAAAASUVORK5CYII=" />
            </a>
            <div id="share-buttons-share-count"></div>
            <div id="share-buttons-clearfix"></div>
        </div>
        <script type="text/javascript" src="js/share-buttons.js"></script>
```