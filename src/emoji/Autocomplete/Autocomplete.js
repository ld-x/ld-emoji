/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

const EMOJIS = [
  {"name":":grinning:","character":"😀"},{"name":":smiley:","character":"😃"},{"name":":smile:","character":"😄"},{"name":":grin:","character":"😁"},{"name":":laughing:","character":"😆"},{"name":":sweat_smile:","character":"😅"},{"name":":joy:","character":"😂"},{"name":":innocent:","character":"😇"},{"name":":rofl:","character":"🤣"},{"name":":relaxed:","character":"☺️"},{"name":":blush:","character":"😊"},{"name":":slight_smile:","character":"🙂"},{"name":":upside_down:","character":"🙃"},{"name":":wink:","character":"😉"},{"name":":relieved:","character":"😌"},{"name":":heart_eyes:","character":"😍"},{"name":":kissing_heart:","character":"😘"},{"name":":kissing:","character":"😗"},{"name":":kissing_smiling_eyes:","character":"😙"},{"name":":kissing_closed_eyes:","character":"😚"},{"name":":yum:","character":"😋"},{"name":":stuck_out_tongue_winking_eye:","character":"😜"},{"name":":stuck_out_tongue_closed_eyes:","character":"😝"},{"name":":stuck_out_tongue:","character":"😛"},{"name":":money_mouth:","character":"🤑"},{"name":":hugging:","character":"🤗"},{"name":":nerd:","character":"🤓"},{"name":":sunglasses:","character":"😎"},{"name":":clown:","character":"🤡"},{"name":":cowboy:","character":"🤠"},{"name":":smirk:","character":"😏"},{"name":":unamused:","character":"😒"},{"name":":disappointed:","character":"😞"},{"name":":pensive:","character":"😔"},{"name":":worried:","character":"😟"},{"name":":confused:","character":"😕"},{"name":":slight_frown:","character":"🙁"},{"name":":frowning2:","character":"☹️"},{"name":":persevere:","character":"😣"},{"name":":confounded:","character":"😖"},{"name":":tired_face:","character":"😫"},{"name":":weary:","character":"😩"},{"name":":triumph:","character":"😤"},{"name":":angry:","character":"😠"},{"name":":rage:","character":"😡"},{"name":":no_mouth:","character":"😶"},{"name":":neutral_face:","character":"😐"},{"name":":expressionless:","character":"😑"},{"name":":hushed:","character":"😯"},{"name":":frowning:","character":"😦"},{"name":":anguished:","character":"😧"},{"name":":open_mouth:","character":"😮"},{"name":":astonished:","character":"😲"},{"name":":dizzy_face:","character":"😵"},{"name":":flushed:","character":"😳"},{"name":":scream:","character":"😱"},{"name":":fearful:","character":"😨"},{"name":":cold_sweat:","character":"😰"},{"name":":cry:","character":"😢"},{"name":":disappointed_relieved:","character":"😥"},{"name":":drooling_face:","character":"🤤"},{"name":":sob:","character":"😭"},{"name":":sweat:","character":"😓"},{"name":":sleepy:","character":"😪"},{"name":":sleeping:","character":"😴"},{"name":":rolling_eyes:","character":"🙄"},{"name":":thinking:","character":"🤔"},{"name":":lying_face:","character":"🤥"},{"name":":grimacing:","character":"😬"},{"name":":zipper_mouth:","character":"🤐"},{"name":":nauseated_face:","character":"🤢"},{"name":":sneezing_face:","character":"🤧"},{"name":":mask:","character":"😷"},{"name":":thermometer_face:","character":"🤒"},{"name":":head_bandage:","character":"🤕"},{"name":":smiling_imp:","character":"😈"},{"name":":imp:","character":"👿"},{"name":":japanese_ogre:","character":"👹"},{"name":":japanese_goblin:","character":"👺"},{"name":":poop:","character":"💩"},{"name":":ghost:","character":"👻"},{"name":":skull:","character":"💀"},{"name":":skull_crossbones:","character":"☠️"},{"name":":alien:","character":"👽"},{"name":":space_invader:","character":"👾"},{"name":":robot:","character":"🤖"},{"name":":jack_o_lantern:","character":"🎃"},{"name":":smiley_cat:","character":"😺"},{"name":":smile_cat:","character":"😸"},{"name":":joy_cat:","character":"😹"},{"name":":heart_eyes_cat:","character":"😻"},{"name":":smirk_cat:","character":"😼"},{"name":":kissing_cat:","character":"😽"},{"name":":scream_cat:","character":"🙀"},{"name":":crying_cat_face:","character":"😿"},{"name":":pouting_cat:","character":"😾"},{"name":":open_hands:","character":"👐"},{"name":":raised_hands:","character":"🙌"},{"name":":clap:","character":"👏"},{"name":":pray:","character":"🙏"},{"name":":handshake:","character":"🤝"},{"name":":thumbsup:","character":"👍"},{"name":":thumbsdown:","character":"👎"},{"name":":punch:","character":"👊"},{"name":":fist:","character":"✊"},{"name":":left_facing_fist:","character":"🤛"},{"name":":right_facing_fist:","character":"🤜"},{"name":":fingers_crossed:","character":"🤞"},{"name":":v:","character":"✌️"},{"name":":metal:","character":"🤘"},{"name":":ok_hand:","character":"👌"},{"name":":point_left:","character":"👈"},{"name":":point_right:","character":"👉"},{"name":":point_up_2:","character":"👆"},{"name":":point_down:","character":"👇"},{"name":":point_up:","character":"☝️"},{"name":":raised_hand:","character":"✋"},{"name":":raised_back_of_hand:","character":"🤚"},{"name":":hand_splayed:","character":"🖐"},{"name":":vulcan:","character":"🖖"},{"name":":wave:","character":"👋"},{"name":":call_me:","character":"🤙"},{"name":":muscle:","character":"💪"},{"name":":middle_finger:","character":"🖕"},{"name":":writing_hand:","character":"✍️"},{"name":":selfie:","character":"🤳"},{"name":":nail_care:","character":"💅"},{"name":":vulcan:","character":"🖖"},{"name":":lipstick:","character":"💄"},{"name":":kiss:","character":"💋"},{"name":":lips:","character":"👄"},{"name":":tongue:","character":"👅"},{"name":":ear:","character":"👂"},{"name":":nose:","character":"👃"},{"name":":footprints:","character":"👣"},{"name":":eye:","character":"👁"},{"name":":eyes:","character":"👀"},{"name":":dress:","character":"👗"},{"name":":high_heel:","character":"👠"},{"name":":mans_shoe:","character":"👞"},{"name":":athletic_shoe:","character":"👟"},{"name":":womans_hat:","character":"👒"},{"name":":tophat:","character":"🎩"},{"name":":mortar_board:","character":"🎓"},{"name":":crown:","character":"👑"},{"name":":helmet_with_cross:","character":"⛑"},{"name":":school_satchel:","character":"🎒"},{"name":":pouch:","character":"👝"},{"name":":purse:","character":"👛"},{"name":":handbag:","character":"👜"},{"name":":briefcase:","character":"💼"},{"name":":eyeglasses:","character":"👓"},{"name":":dark_sunglasses:","character":"🕶"},{"name":":umbrella2:","character":"☂️"},
  {"name":":dog:","character":"🐶"},{"name":":cat:","character":"🐱"},{"name":":mouse:","character":"🐭"},{"name":":hamster:","character":"🐹"},{"name":":rabbit:","character":"🐰"},{"name":":fox:","character":"🦊"},{"name":":bear:","character":"🐻"},{"name":":panda_face:","character":"🐼"},{"name":":koala:","character":"🐨"},{"name":":tiger:","character":"🐯"},{"name":":lion_face:","character":"🦁"},{"name":":cow:","character":"🐮"},{"name":":pig:","character":"🐷"},{"name":":pig_nose:","character":"🐽"},{"name":":frog:","character":"🐸"},{"name":":monkey_face:","character":"🐵"},{"name":":speak_no_evil:","character":"🙊"},{"name":":hear_no_evil:","character":"🙉"},{"name":":speak_no_evil:","character":"🙊"},{"name":":monkey:","character":"🐒"},{"name":":chicken:","character":"🐔"},{"name":":penguin:","character":"🐧"},{"name":":bird:","character":"🐦"},{"name":":baby_chick:","character":"🐤"},{"name":":hatching_chick:","character":"🐣"},{"name":":hatched_chick:","character":"🐥"},{"name":":duck:","character":"🦆"},{"name":":eagle:","character":"🦅"},{"name":":owl:","character":"🦉"},{"name":":bat:","character":"🦇"},{"name":":wolf:","character":"🐺"},{"name":":boar:","character":"🐗"},{"name":":horse:","character":"🐴"},{"name":":unicorn:","character":"🦄"},{"name":":bee:","character":"🐝"},{"name":":bug:","character":"🐛"},{"name":":butterfly:","character":"🦋"},{"name":":snail:","character":"🐌"},{"name":":shell:","character":"🐚"},{"name":":beetle:","character":"🐞"},{"name":":ant:","character":"🐜"},{"name":":spider:","character":"🕷"},{"name":":spider_web:","character":"🕸"},{"name":":turtle:","character":"🐢"},{"name":":snake:","character":"🐍"},{"name":":lizard:","character":"🦎"},{"name":":scorpion:","character":"🦂"},{"name":":crab:","character":"🦀"},{"name":":squid:","character":"🦑"},{"name":":octopus:","character":"🐙"},{"name":":shrimp:","character":"🦐"},{"name":":tropical_fish:","character":"🐠"},{"name":":fish:","character":"🐟"},{"name":":blowfish:","character":"🐡"},{"name":":dolphin:","character":"🐬"},{"name":":shark:","character":"🦈"},{"name":":whale:","character":"🐳"},{"name":":whale2:","character":"🐋"},{"name":":crocodile:","character":"🐊"},{"name":":leopard:","character":"🐆"},{"name":":tiger2:","character":"🐅"},{"name":":water_buffalo:","character":"🐃"},{"name":":ox:","character":"🐂"},{"name":":cow2:","character":"🐄"},{"name":":deer:","character":"🦌"},{"name":":dromedary_camel:","character":"🐪"},{"name":":camel:","character":"🐫"},{"name":":elephant:","character":"🐘"},{"name":":rhino:","character":"🦏"},{"name":":gorilla:","character":"🦍"},{"name":":racehorse:","character":"🐎"},{"name":":pig2:","character":"🐖"},{"name":":goat:","character":"🐐"},{"name":":ram:","character":"🐏"},{"name":":sheep:","character":"🐑"},{"name":":dog2:","character":"🐕"},{"name":":poodle:","character":"🐩"},{"name":":cat2:","character":"🐈"},{"name":":rooster:","character":"🐓"},{"name":":turkey:","character":"🦃"},{"name":":dove:","character":"🕊"},{"name":":rabbit2:","character":"🐇"},{"name":":mouse2:","character":"🐁"},{"name":":rat:","character":"🐀"},{"name":":chipmunk:","character":"🐿"},{"name":":feet:","character":"🐾"},{"name":":dragon:","character":"🐉"},{"name":":dragon_face:","character":"🐲"},{"name":":cactus:","character":"🌵"},{"name":":christmas_tree:","character":"🎄"},{"name":":evergreen_tree:","character":"🌲"},{"name":":deciduous_tree:","character":"🌳"},{"name":":palm_tree:","character":"🌴"},{"name":":seedling:","character":"🌱"},{"name":":herb:","character":"🌿"},{"name":":shamrock:","character":"☘️"},{"name":":four_leaf_clover:","character":"🍀"},{"name":":bamboo:","character":"🎍"},{"name":":tanabata_tree:","character":"🎋"},{"name":":leaves:","character":"🍃"},{"name":":fallen_leaf:","character":"🍂"},{"name":":maple_leaf:","character":"🍁"},{"name":":mushroom:","character":"🍄"},{"name":":ear_of_rice:","character":"🌾"},{"name":":bouquet:","character":"💐"},{"name":":tulip:","character":"🌷"},{"name":":rose:","character":"🌹"},{"name":":wilted_rose:","character":"🥀"},{"name":":sunflower:","character":"🌻"},{"name":":blossom:","character":"🌼"},{"name":":cherry_blossom:","character":"🌸"},{"name":":hibiscus:","character":"🌺"},{"name":":earth_americas:","character":"🌎"},{"name":":earth_africa:","character":"🌍"},{"name":":earth_asia:","character":"🌏"},{"name":":full_moon:","character":"🌕"},{"name":":waning_gibbous_moon:","character":"🌖"},{"name":":waxing_gibbous_moon:","character":"🌔"},{"name":":new_moon_with_face:","character":"🌚"},{"name":":full_moon_with_face:","character":"🌝"},{"name":":sun_with_face:","character":"🌞"},{"name":":first_quarter_moon_with_face:","character":"🌛"},{"name":":last_quarter_moon_with_face:","character":"🌜"},{"name":":crescent_moon:","character":"🌙"},{"name":":dizzy:","character":"💫"},{"name":":star:","character":"⭐️"},{"name":":star2:","character":"🌟"},{"name":":sparkles:","character":"✨"},{"name":":zap:","character":"⚡️"},{"name":":fire:","character":"🔥"},{"name":":boom:","character":"💥"},{"name":":comet:","character":"☄️"},{"name":":sunny:","character":"☀️"},{"name":":white_sun_small_cloud:","character":"🌤"},{"name":":partly_sunny:","character":"⛅️"},{"name":":white_sun_cloud:","character":"🌥"},{"name":":white_sun_rain_cloud:","character":"🌦"},{"name":":rainbow:","character":"🌈"},{"name":":cloud:","character":"☁️"},{"name":":cloud_rain:","character":"🌧"},{"name":":thunder_cloud_rain:","character":"⛈"},{"name":":cloud_lightning:","character":"🌩"},{"name":":cloud_snow:","character":"🌨"},{"name":":snowman2:","character":"☃️"},{"name":":snowman:","character":"⛄️"},{"name":":snowflake:","character":"❄️"},{"name":":wind_blowing_face:","character":"🌬"},{"name":":dash:","character":"💨"},{"name":":cloud_tornado:","character":"🌪"},{"name":":fog:","character":"🌫"},{"name":":ocean:","character":"🌊"},{"name":":droplet:","character":"💧"},{"name":":sweat_drops:","character":"💦"},{"name":":umbrella:","character":"☔️"},
  {"name":":green_apple:","character":"🍏"},{"name":":apple:","character":"🍎"},{"name":":pear:","character":"🍐"},{"name":":tangerine:","character":"🍊"},{"name":":lemon:","character":"🍋"},{"name":":banana:","character":"🍌"},{"name":":watermelon:","character":"🍉"},{"name":":grapes:","character":"🍇"},{"name":":strawberry:","character":"🍓"},{"name":":melon:","character":"🍈"},{"name":":cherries:","character":"🍒"},{"name":":peach:","character":"🍑"},{"name":":pineapple:","character":"🍍"},{"name":":kiwi:","character":"🥝"},{"name":":avocado:","character":"🥑"},{"name":":tomato:","character":"🍅"},{"name":":eggplant:","character":"🍆"},{"name":":cucumber:","character":"🥒"},{"name":":carrot:","character":"🥕"},{"name":":corn:","character":"🌽"},{"name":":hot_pepper:","character":"🌶"},{"name":":potato:","character":"🥔"},{"name":":sweet_potato:","character":"🍠"},{"name":":chestnut:","character":"🌰"},{"name":":peanuts:","character":"🥜"},{"name":":honey_pot:","character":"🍯"},{"name":":croissant:","character":"🥐"},{"name":":bread:","character":"🍞"},{"name":":french_bread:","character":"🥖"},{"name":":cheese:","character":"🧀"},{"name":":egg:","character":"🥚"},{"name":":cooking:","character":"🍳"},{"name":":bacon:","character":"🥓"},{"name":":pancakes:","character":"🥞"},{"name":":fried_shrimp:","character":"🍤"},{"name":":poultry_leg:","character":"🍗"},{"name":":meat_on_bone:","character":"🍖"},{"name":":pizza:","character":"🍕"},{"name":":hotdog:","character":"🌭"},{"name":":hamburger:","character":"🍔"},{"name":":fries:","character":"🍟"},{"name":":stuffed_flatbread:","character":"🥙"},{"name":":taco:","character":"🌮"},{"name":":burrito:","character":"🌯"},{"name":":salad:","character":"🥗"},{"name":":shallow_pan_of_food:","character":"🥘"},{"name":":spaghetti:","character":"🍝"},{"name":":ramen:","character":"🍜"},{"name":":stew:","character":"🍲"},{"name":":fish_cake:","character":"🍥"},{"name":":sushi:","character":"🍣"},{"name":":bento:","character":"🍱"},{"name":":curry:","character":"🍛"},{"name":":rice:","character":"🍚"},{"name":":rice_ball:","character":"🍙"},{"name":":rice_cracker:","character":"🍘"},{"name":":oden:","character":"🍢"},{"name":":dango:","character":"🍡"},{"name":":shaved_ice:","character":"🍧"},{"name":":ice_cream:","character":"🍨"},{"name":":icecream:","character":"🍦"},{"name":":cake:","character":"🍰"},{"name":":birthday:","character":"🎂"},{"name":":custard:","character":"🍮"},{"name":":lollipop:","character":"🍭"},{"name":":candy:","character":"🍬"},{"name":":chocolate_bar:","character":"🍫"},{"name":":popcorn:","character":"🍿"},{"name":":doughnut:","character":"🍩"},{"name":":cookie:","character":"🍪"},{"name":":milk:","character":"🥛"},{"name":":baby_bottle:","character":"🍼"},{"name":":coffee:","character":"☕️"},{"name":":tea:","character":"🍵"},{"name":":sake:","character":"🍶"},{"name":":beer:","character":"🍺"},{"name":":beers:","character":"🍻"},{"name":":champagne_glass:","character":"🥂"},{"name":":wine_glass:","character":"🍷"},{"name":":tumbler_glass:","character":"🥃"},{"name":":cocktail:","character":"🍸"},{"name":":tropical_drink:","character":"🍹"},{"name":":champagne:","character":"🍾"},{"name":":spoon:","character":"🥄"},{"name":":fork_and_knife:","character":"🍴"},{"name":":fork_knife_plate:","character":"🍽"},{"name":":soccer:","character":"⚽️"},{"name":":basketball:","character":"🏀"},{"name":":football:","character":"🏈"},{"name":":baseball:","character":"⚾️"},{"name":":tennis:","character":"🎾"},{"name":":volleyball:","character":"🏐"},{"name":":rugby_football:","character":"🏉"},{"name":":8ball:","character":"🎱"},{"name":":ping_pong:","character":"🏓"},{"name":":badminton:","character":"🏸"},{"name":":goal:","character":"🥅"},{"name":":hockey:","character":"🏒"},{"name":":field_hockey:","character":"🏑"},{"name":":cricket:","character":"🏏"},{"name":":golf:","character":"⛳️"},{"name":":bow_and_arrow:","character":"🏹"},{"name":":fishing_pole_and_fish:","character":"🎣"},{"name":":boxing_glove:","character":"🥊"},{"name":":martial_arts_uniform:","character":"🥋"},{"name":":ice_skate:","character":"⛸"},{"name":":ski:","character":"🎿"},{"name":":skier:","character":"⛷"},{"name":":snowboarder:","character":"🏂"},{"name":":lifter:","character":"🏋"},{"name":":fencer:","character":"🤺"},{"name":":basketball_player:","character":"⛹️"},{"name":":golfer:","character":"🏌"},{"name":":surfer:","character":"🏄"},{"name":":swimmer:","character":"🏊"},{"name":":water_polo:","character":"🤽"},{"name":":rowboat:","character":"🚣"},{"name":":horse_racing:","character":"🏇"},{"name":":bicyclist:","character":"🚴"},{"name":":mountain_bicyclist:","character":"🚵"},{"name":":clapper:","character":"🎬"},{"name":":microphone:","character":"🎤"},{"name":":headphones:","character":"🎧"},{"name":":musical_score:","character":"🎼"},{"name":":musical_keyboard:","character":"🎹"},{"name":":drum:","character":"🥁"},{"name":":saxophone:","character":"🎷"},{"name":":trumpet:","character":"🎺"},{"name":":guitar:","character":"🎸"},{"name":":violin:","character":"🎻"},{"name":":game_die:","character":"🎲"},{"name":":dart:","character":"🎯"},{"name":":bowling:","character":"🎳"},{"name":":video_game:","character":"🎮"},{"name":":flag_white:","character":"🏳"},{"name":":flag_black:","character":"🏴"},{"name":":checkered_flag:","character":"🏁"},{"name":":triangular_flag_on_post:","character":"🚩"},{"name":":running_shirt_with_sash:","character":"🎽"},{"name":":first_place:","character":"🥇"},{"name":":second_place:","character":"🥈"},{"name":":third_place:","character":"🥉"},{"name":":trophy:","character":"🏆"},
  {"name":":red_car:","character":"🚗"},{"name":":taxi:","character":"🚕"},{"name":":blue_car:","character":"🚙"},{"name":":bus:","character":"🚌"},{"name":":trolleybus:","character":"🚎"},{"name":":race_car:","character":"🏎"},{"name":":police_car:","character":"🚓"},{"name":":ambulance:","character":"🚑"},{"name":":fire_engine:","character":"🚒"},{"name":":minibus:","character":"🚐"},{"name":":truck:","character":"🚚"},{"name":":articulated_lorry:","character":"🚛"},{"name":":tractor:","character":"🚜"},{"name":":scooter:","character":"🛴"},{"name":":bike:","character":"🚲"},{"name":":motor_scooter:","character":"🛵"},{"name":":motorcycle:","character":"🏍"},{"name":":rotating_light:","character":"🚨"},{"name":":oncoming_police_car:","character":"🚔"},{"name":":oncoming_bus:","character":"🚍"},{"name":":oncoming_automobile:","character":"🚘"},{"name":":oncoming_taxi:","character":"🚖"},{"name":":aerial_tramway:","character":"🚡"},{"name":":mountain_cableway:","character":"🚠"},{"name":":suspension_railway:","character":"🚟"},{"name":":railway_car:","character":"🚃"},{"name":":train:","character":"🚋"},{"name":":mountain_railway:","character":"🚞"},{"name":":monorail:","character":"🚝"},{"name":":bullettrain_side:","character":"🚄"},{"name":":bullettrain_front:","character":"🚅"},{"name":":light_rail:","character":"🚈"},{"name":":steam_locomotive:","character":"🚂"},{"name":":train2:","character":"🚆"},{"name":":metro:","character":"🚇"},{"name":":tram:","character":"🚊"},{"name":":station:","character":"🚉"},{"name":":helicopter:","character":"🚁"},{"name":":airplane_small:","character":"🛩"},{"name":":airplane:","character":"✈️"},{"name":":airplane_departure:","character":"🛫"},{"name":":airplane_arriving:","character":"🛬"},{"name":":rocket:","character":"🚀"},{"name":":satellite_orbital:","character":"🛰"},{"name":":seat:","character":"💺"},{"name":":canoe:","character":"🛶"},{"name":":sailboat:","character":"⛵️"},{"name":":motorboat:","character":"🛥"},{"name":":speedboat:","character":"🚤"},{"name":":cruise_ship:","character":"🛳"},{"name":":ferry:","character":"⛴"},{"name":":ship:","character":"🚢"},{"name":":anchor:","character":"⚓️"},{"name":":construction:","character":"🚧"},{"name":":fuelpump:","character":"⛽️"},{"name":":busstop:","character":"🚏"},{"name":":vertical_traffic_light:","character":"🚦"},{"name":":traffic_light:","character":"🚥"},{"name":":map:","character":"🗺"},{"name":":moyai:","character":"🗿"},{"name":":statue_of_liberty:","character":"🗽"},{"name":":fountain:","character":"⛲️"},{"name":":tokyo_tower:","character":"🗼"},{"name":":european_castle:","character":"🏰"},{"name":":japanese_castle:","character":"🏯"},{"name":":stadium:","character":"🏟"},{"name":":ferris_wheel:","character":"🎡"},{"name":":roller_coaster:","character":"🎢"},{"name":":carousel_horse:","character":"🎠"},{"name":":beach_umbrella:","character":"⛱"},{"name":":beach:","character":"🏖"},{"name":":island:","character":"🏝"},{"name":":mountain:","character":"⛰"},{"name":":mountain_snow:","character":"🏔"},{"name":":mount_fuji:","character":"🗻"},{"name":":volcano:","character":"🌋"},{"name":":desert:","character":"🏜"},{"name":":camping:","character":"🏕"},{"name":":tent:","character":"⛺️"},{"name":":railway_track:","character":"🛤"},{"name":":motorway:","character":"🛣"},{"name":":construction_site:","character":"🏗"},{"name":":factory:","character":"🏭"},{"name":":house:","character":"🏠"},{"name":":house_with_garden:","character":"🏡"},{"name":":homes:","character":"🏘"},{"name":":house_abandoned:","character":"🏚"},{"name":":office:","character":"🏢"},{"name":":department_store:","character":"🏬"},{"name":":post_office:","character":"🏣"},{"name":":european_post_office:","character":"🏤"},{"name":":hospital:","character":"🏥"},{"name":":bank:","character":"🏦"},{"name":":hotel:","character":"🏨"},{"name":":convenience_store:","character":"🏪"},{"name":":school:","character":"🏫"},{"name":":love_hotel:","character":"🏩"},{"name":":wedding:","character":"💒"},{"name":":classical_building:","character":"🏛"},{"name":":church:","character":"⛪️"},{"name":":mosque:","character":"🕌"},{"name":":synagogue:","character":"🕍"},{"name":":kaaba:","character":"🕋"},{"name":":shinto_shrine:","character":"⛩"},{"name":":japan:","character":"🗾"},{"name":":rice_scene:","character":"🎑"},{"name":":park:","character":"🏞"},{"name":":sunrise:","character":"🌅"},{"name":":sunrise_over_mountains:","character":"🌄"},{"name":":stars:","character":"🌠"},{"name":":sparkler:","character":"🎇"},{"name":":fireworks:","character":"🎆"},{"name":":city_sunset:","character":"🌇"},{"name":":city_dusk:","character":"🌆"},{"name":":cityscape:","character":"🏙"},{"name":":night_with_stars:","character":"🌃"},{"name":":milky_way:","character":"🌌"},{"name":":bridge_at_night:","character":"🌉"},{"name":":foggy:","character":"🌁"},{"name":":performing_arts:","character":"🎭"},{"name":":art:","character":"🎨"},
  {"name":":free:","character":"🆓"},{"name":":green_book:","character":"📗"},{"name":":closed_book:","character":"📕"},{"name":":watch:","character":"⌚️"},{"name":":iphone:","character":"📱"},{"name":":calling:","character":"📲"},{"name":":computer:","character":"💻"},{"name":":keyboard:","character":"⌨️"},{"name":":desktop:","character":"🖥"},{"name":":printer:","character":"🖨"},{"name":":mouse_three_button:","character":"🖱"},{"name":":trackball:","character":"🖲"},{"name":":joystick:","character":"🕹"},{"name":":compression:","character":"🗜"},{"name":":minidisc:","character":"💽"},{"name":":floppy_disk:","character":"💾"},{"name":":cd:","character":"💿"},{"name":":dvd:","character":"📀"},{"name":":vhs:","character":"📼"},{"name":":camera:","character":"📷"},{"name":":camera_with_flash:","character":"📸"},{"name":":video_camera:","character":"📹"},{"name":":movie_camera:","character":"🎥"},{"name":":projector:","character":"📽"},{"name":":film_frames:","character":"🎞"},{"name":":telephone_receiver:","character":"📞"},{"name":":telephone:","character":"☎️"},{"name":":pager:","character":"📟"},{"name":":fax:","character":"📠"},{"name":":tv:","character":"📺"},{"name":":radio:","character":"📻"},{"name":":microphone2:","character":"🎙"},{"name":":level_slider:","character":"🎚"},{"name":":control_knobs:","character":"🎛"},{"name":":stopwatch:","character":"⏱"},{"name":":timer:","character":"⏲"},{"name":":alarm_clock:","character":"⏰"},{"name":":clock:","character":"🕰"},{"name":":hourglass:","character":"⌛️"},{"name":":hourglass_flowing_sand:","character":"⏳"},{"name":":satellite:","character":"📡"},{"name":":battery:","character":"🔋"},{"name":":electric_plug:","character":"🔌"},{"name":":bulb:","character":"💡"},{"name":":flashlight:","character":"🔦"},{"name":":candle:","character":"🕯"},{"name":":wastebasket:","character":"🗑"},{"name":":oil:","character":"🛢"},{"name":":money_with_wings:","character":"💸"},{"name":":dollar:","character":"💵"},{"name":":yen:","character":"💴"},{"name":":euro:","character":"💶"},{"name":":pound:","character":"💷"},{"name":":moneybag:","character":"💰"},{"name":":credit_card:","character":"💳"},{"name":":gem:","character":"💎"},{"name":":scales:","character":"⚖️"},{"name":":wrench:","character":"🔧"},{"name":":hammer:","character":"🔨"},{"name":":hammer_pick:","character":"⚒"},{"name":":pick:","character":"⛏"},{"name":":gear:","character":"⚙️"},{"name":":bomb:","character":"💣"},{"name":":knife:","character":"🔪"},{"name":":dagger:","character":"🗡"},{"name":":crossed_swords:","character":"⚔️"},{"name":":shield:","character":"🛡"},{"name":":smoking:","character":"🚬"},{"name":":coffin:","character":"⚰️"},{"name":":urn:","character":"⚱️"},{"name":":amphora:","character":"🏺"},{"name":":crystal_ball:","character":"🔮"},{"name":":prayer_beads:","character":"📿"},{"name":":barber:","character":"💈"},{"name":":alembic:","character":"⚗️"},{"name":":telescope:","character":"🔭"},{"name":":microscope:","character":"🔬"},{"name":":hole:","character":"🕳"},{"name":":pill:","character":"💊"},{"name":":syringe:","character":"💉"},{"name":":thermometer:","character":"🌡"},{"name":":toilet:","character":"🚽"},{"name":":potable_water:","character":"🚰"},{"name":":shower:","character":"🚿"},{"name":":bathtub:","character":"🛁"},{"name":":bath:","character":"🛀"},{"name":":bellhop:","character":"🛎"},{"name":":key:","character":"🔑"},{"name":":key2:","character":"🗝"},{"name":":door:","character":"🚪"},{"name":":couch:","character":"🛋"},{"name":":bed:","character":"🛏"},{"name":":frame_photo:","character":"🖼"},{"name":":shopping_bags:","character":"🛍"},{"name":":shopping_cart:","character":"🛒"},{"name":":gift:","character":"🎁"},{"name":":balloon:","character":"🎈"},{"name":":flags:","character":"🎏"},{"name":":ribbon:","character":"🎀"},{"name":":confetti_ball:","character":"🎊"},{"name":":tada:","character":"🎉"},{"name":":dolls:","character":"🎎"},{"name":":izakaya_lantern:","character":"🏮"},{"name":":wind_chime:","character":"🎐"},{"name":":envelope:","character":"✉️"},{"name":":mailbox_closed:","character":"📪"},{"name":":postbox:","character":"📮"},{"name":":postal_horn:","character":"📯"},{"name":":scroll:","character":"📜"},{"name":":page_with_curl:","character":"📃"},{"name":":page_facing_up:","character":"📄"},{"name":":bookmark_tabs:","character":"📑"},{"name":":bar_chart:","character":"📊"},{"name":":chart_with_upwards_trend:","character":"📈"},{"name":":chart_with_downwards_trend:","character":"📉"},{"name":":notepad_spiral:","character":"🗒"},{"name":":calendar_spiral:","character":"🗓"},{"name":":calendar:","character":"📆"},{"name":":date:","character":"📅"},{"name":":card_index:","character":"📇"},{"name":":card_box:","character":"🗃"},{"name":":ballot_box:","character":"🗳"},{"name":":file_cabinet:","character":"🗄"},{"name":":clipboard:","character":"📋"},{"name":":newspaper2:","character":"🗞"},{"name":":newspaper:","character":"📰"},{"name":":blue_book:","character":"📘"},{"name":":books:","character":"📚"},{"name":":book:","character":"📖"},{"name":":bookmark:","character":"🔖"},{"name":":link:","character":"🔗"},{"name":":paperclip:","character":"📎"},{"name":":triangular_ruler:","character":"📐"},{"name":":straight_ruler:","character":"📏"},{"name":":round_pushpin:","character":"📍"},{"name":":pushpin:","character":"📌"},{"name":":pen_ballpoint:","character":"🖊"},{"name":":paintbrush:","character":"🖌"},{"name":":crayon:","character":"🖍"},{"name":":pencil:","character":"📝"},{"name":":pencil2:","character":"✏️"},{"name":":mag:","character":"🔍"},{"name":":unlock:","character":"🔓"},
  {"name":":heart:","character":"❤️"},{"name":":yellow_heart:","character":"💛"},{"name":":green_heart:","character":"💚"},{"name":":blue_heart:","character":"💙"},{"name":":purple_heart:","character":"💜"},{"name":":black_heart:","character":"🖤"},{"name":":broken_heart:","character":"💔"},{"name":":heart_exclamation:","character":"❣️"},{"name":":two_hearts:","character":"💕"},{"name":":revolving_hearts:","character":"💞"},{"name":":heartbeat:","character":"💓"},{"name":":heartpulse:","character":"💗"},{"name":":sparkling_heart:","character":"💖"},{"name":":cupid:","character":"💘"},{"name":":gift_heart:","character":"💝"},{"name":":heart_decoration:","character":"💟"},{"name":":peace:","character":"☮️"},{"name":":cross:","character":"✝️"},{"name":":star_and_crescent:","character":"☪️"},{"name":":om_symbol:","character":"🕉"},{"name":":wheel_of_dharma:","character":"☸️"},{"name":":star_of_david:","character":"✡️"},{"name":":six_pointed_star:","character":"🔯"},{"name":":menorah:","character":"🕎"},{"name":":yin_yang:","character":"☯️"},{"name":":orthodox_cross:","character":"☦️"},{"name":":place_of_worship:","character":"🛐"},{"name":":ophiuchus:","character":"⛎"},{"name":":aries:","character":"♈️"},{"name":":taurus:","character":"♉️"},{"name":":gemini:","character":"♊️"},{"name":":cancer:","character":"♋️"},{"name":":leo:","character":"♌️"},{"name":":virgo:","character":"♍️"},{"name":":libra:","character":"♎️"},{"name":":scorpius:","character":"♏️"},{"name":":sagittarius:","character":"♐️"},{"name":":capricorn:","character":"♑️"},{"name":":aquarius:","character":"♒️"},{"name":":pisces:","character":"♓️"},{"name":":id:","character":"🆔"},{"name":":atom:","character":"⚛️"},{"name":":accept:","character":"🉑"},{"name":":radioactive:","character":"☢️"},{"name":":biohazard:","character":"☣️"},{"name":":mobile_phone_off:","character":"📴"},{"name":":vibration_mode:","character":"📳"},{"name":":u6709:","character":"🈶"},{"name":":u7121:","character":"🈚"},{"name":":u7533:","character":"🈸"},{"name":":u55b6:","character":"🈺"},{"name":":u6708:","character":"🈷"},{"name":":eight_pointed_black_star:","character":"✴️"},{"name":":vs:","character":"🆚"},{"name":":white_flower:","character":"💮"},{"name":":ideograph_advantage:","character":"🉐"},{"name":":secret:","character":"㊙️"},{"name":":congratulations:","character":"㊗️"},{"name":":u5408:","character":"🈴"},{"name":":u6e80:","character":"🈵"},{"name":":u5272:","character":"🈹"},{"name":":u7981:","character":"🈲"},{"name":":x:","character":"❌"},{"name":":o:","character":"⭕️"},{"name":":octagonal_sign:","character":"🛑"},{"name":":no_entry:","character":"⛔️"},{"name":":name_badge:","character":"📛"},{"name":":no_entry_sign:","character":"🚫"},{"name":":100:","character":"💯"},{"name":":anger:","character":"💢"},{"name":":hotsprings:","character":"♨️"},{"name":":no_pedestrians:","character":"🚷"},{"name":":do_not_litter:","character":"🚯"},{"name":":no_bicycles:","character":"🚳"},{"name":":non-potable_water:","character":"🚱"},{"name":":underage:","character":"🔞"},{"name":":no_mobile_phones:","character":"📵"},{"name":":no_smoking:","character":"🚭"},{"name":":grey_exclamation:","character":"❕"},{"name":":grey_question:","character":"❔"},{"name":":bangbang:","character":"‼️"},{"name":":interrobang:","character":"⁉️"},{"name":":low_brightness:","character":"🔅"},{"name":":high_brightness:","character":"🔆"},{"name":":part_alternation_mark:","character":"〽️"},{"name":":warning:","character":"⚠️"},{"name":":children_crossing:","character":"🚸"},{"name":":trident:","character":"🔱"},{"name":":fleur-de-lis:","character":"⚜️"},{"name":":beginner:","character":"🔰"},{"name":":recycle:","character":"♻️"},{"name":":white_check_mark:","character":"✅"},{"name":":u6307:","character":"🈯"},{"name":":chart:","character":"💹"},{"name":":sparkle:","character":"❇️"},{"name":":eight_spoked_asterisk:","character":"✳️"},{"name":":negative_squared_cross_mark:","character":"❎"},{"name":":globe_with_meridians:","character":"🌐"},{"name":":diamond_shape_with_a_dot_inside:","character":"💠"},{"name":":m:","character":"Ⓜ️"},{"name":":cyclone:","character":"🌀"},{"name":":zzz:","character":"💤"},{"name":":womens:","character":"🚺"},{"name":":baby_symbol:","character":"🚼"},{"name":":musical_note:","character":"🎵"},{"name":":notes:","character":"🎶"},{"name":":heavy_plus_sign:","character":"➕"},{"name":":heavy_minus_sign:","character":"➖"},{"name":":heavy_division_sign:","character":"➗"},{"name":":heavy_multiplication_x:","character":"✖️"},{"name":":heavy_dollar_sign:","character":"💲"},{"name":":currency_exchange:","character":"💱"},{"name":":tm:","character":"™️"},{"name":":copyright:","character":"©️"},{"name":":registered:","character":"®️"},{"name":":wavy_dash:","character":"〰️"},{"name":":curly_loop:","character":"➰"},{"name":":loop:","character":"➿"},{"name":":end:","character":"🔚"},{"name":":back:","character":"🔙"},{"name":":on:","character":"🔛"},{"name":":top:","character":"🔝"},{"name":":heavy_check_mark:","character":"✔️"},{"name":":ballot_box_with_check:","character":"☑️"},{"name":":speaker:","character":"🔈"},{"name":":mute:","character":"🔇"},{"name":":sound:","character":"🔉"},{"name":":loud_sound:","character":"🔊"},{"name":":bell:","character":"🔔"},{"name":":no_bell:","character":"🔕"},{"name":":mega:","character":"📣"},{"name":":loudspeaker:","character":"📢"},{"name":":speech_left:","character":"🗨"},{"name":":speech_balloon:","character":"💬"},{"name":":thought_balloon:","character":"💭"},{"name":":anger_right:","character":"🗯"},{"name":":spades:","character":"♠️"},{"name":":clubs:","character":"♣️"},{"name":":hearts:","character":"♥️"},{"name":":diamonds:","character":"♦️"},{"name":":black_joker:","character":"🃏"},{"name":":flower_playing_cards:","character":"🎴"},{"name":":mahjong:","character":"🀄"}
]

var SearchItemInArrayObjects = function (items, input, searchKey) {
 if (input.trim() === '' || searchKey === undefined) {
   return []
 }
 var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ''), 'i')

 return items.filter(function (item) {
   if (reg.test(item[searchKey])) {
     return item
   }
 })
}

import React, {Component} from "react"
import styled from 'styled-components'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      foundUsers: []
    }
  }

  componentDidMount() {
    this.findUsers()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.findUsers()
    }
  }

  selectAutoComplete (item) {
    if(typeof this.props.onClick !== 'undefined'){
      this.props.onClick(item)
    }
  }

  findUsers () {
    const {searchValue, searchKey} = this.props

    let users = SearchItemInArrayObjects(EMOJIS, searchValue, searchKey)
    this.setState({foundUsers: users})
  }

  renderUsers () {
    const {foundUsers} = this.state
    const {searchValue} = this.props

    return foundUsers.map((item, i) => {
      let name = item.name
      return (
        <ListItem key={i} onClick={() => this.selectAutoComplete(item)}>
          <EmojiItem>{item.character}</EmojiItem>
        </ListItem>
      )
    })
  }

  render() {
    const {searchValue} = this.props
    let menuStyle = { border: '1px solid #b7b7b7' }
    if (searchValue.length < 1) { menuStyle = { border: 'none' } }

    return (
      <Search>
        <Menu style={menuStyle}>
          <List>{this.renderUsers()}</List>
        </Menu>
      </Search>
    )
  }
}

const Search = styled.div`
  line-height: 1.5;
  width: 100%;
  min-width: 3rem;
`

const Menu = styled.div`
  background: white;
  display: block;
  text-decoration: none;
  white-space: nowrap;
  padding: 0;
  max-height: 15rem;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  visibility: visible;
  z-index: 100;
  margin-top: -1.5rem;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  margin: 0.3rem;
  margin-left: 0.6rem
`

const EmojiItem = styled.span`
  cursor: pointer;
`
