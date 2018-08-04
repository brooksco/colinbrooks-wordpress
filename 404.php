<!DOCTYPE html>
<html>
<head>
    <title>What is lost can be found again (404)</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">

        body {
            background-color: #242b2b;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'Roboto', arial, sans-serif;
            margin: 0;
        }

        h1 {
            font-size: 4em;
            margin: 0;
            color: white;
        }

        p {
            font-size: 1.5em;
            line-height: 1.5em;
            margin: .5em 0 0 0;
        }

        #bear-bearrier {
            display: flex;
            align-items: center;
            height: 100vh;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 2em 0 2em;
        }

        #andy {
            width: 250px;
            float: left;
            display: inline;
            margin: 0 2em .5em 0;
        }

        @media (max-width: 620px) {
            #bear-bearrier {
                margin-top: 1.2em;
                display: block;
                height: auto;
            }

            #bearror-of-bad-news {
                margin: 1.2em 0 1.2em 0;
            }

            #andy {
                display: block;
                float: none;
                margin: auto;
            }

            h1 {
                font-size: 3em;
            }

            p {
                font-size: 1.1em;
            }
        }

    </style>
</head>

<body>

<div id="bear-bearrier">
    <a href="/">
        <img id="andy" src="<?php echo get_template_directory_uri(); ?>/img/404-bear.png">
    </a>

    <div id="bearror-of-bad-news">
        <h1>Ruh roh.</h1>
        <p>The page that maybe should be here seems to not be here. You might have mistyped something, or the page might
            have become lost. But remember, we are <em>alive</em>.</p>
    </div>
</div>

</body>
</html>