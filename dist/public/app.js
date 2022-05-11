/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5210:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetRandomGuess = exports.GetRandomAnswer = exports.IsValidWord = void 0;
const Word_1 = __webpack_require__(2803);
function IsValidWord(word) {
    for (let i = 0; i < WORDS.length; i++) {
        if (word === WORDS[i]) {
            return true;
        }
    }
    return false;
}
exports.IsValidWord = IsValidWord;
function GetRandomAnswer() {
    return ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
}
exports.GetRandomAnswer = GetRandomAnswer;
function GetRandomGuess() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
}
exports.GetRandomGuess = GetRandomGuess;
const RAW_ANSWERS = `aback
abase
abate
abbey
abbot
abhor
abide
abled
abode
abort
about
above
abuse
abyss
acorn
acrid
actor
acute
adage
adapt
adept
admin
admit
adobe
adopt
adore
adorn
adult
affix
afire
afoot
afoul
after
again
agape
agate
agent
agile
aging
aglow
agony
agree
ahead
aider
aisle
alarm
album
alert
algae
alibi
alien
align
alike
alive
allay
alley
allot
allow
alloy
aloft
alone
along
aloof
aloud
alpha
altar
alter
amass
amaze
amber
amble
amend
amiss
amity
among
ample
amply
amuse
angel
anger
angle
angry
angst
anime
ankle
annex
annoy
annul
anode
antic
anvil
aorta
apart
aphid
aping
apnea
apple
apply
apron
aptly
arbor
ardor
arena
argue
arise
armor
aroma
arose
array
arrow
arson
artsy
ascot
ashen
aside
askew
assay
asset
atoll
atone
attic
audio
audit
augur
aunty
avail
avert
avian
avoid
await
awake
award
aware
awash
awful
awoke
axial
axiom
axion
azure
bacon
badge
badly
bagel
baggy
baker
baler
balmy
banal
banjo
barge
baron
basal
basic
basil
basin
basis
baste
batch
bathe
baton
batty
bawdy
bayou
beach
beady
beard
beast
beech
beefy
befit
began
begat
beget
begin
begun
being
belch
belie
belle
belly
below
bench
beret
berry
berth
beset
betel
bevel
bezel
bible
bicep
biddy
bigot
bilge
billy
binge
bingo
biome
birch
birth
bison
bitty
black
blade
blame
bland
blank
blare
blast
blaze
bleak
bleat
bleed
bleep
blend
bless
blimp
blind
blink
bliss
blitz
bloat
block
bloke
blond
blood
bloom
blown
bluer
bluff
blunt
blurb
blurt
blush
board
boast
bobby
boney
bongo
bonus
booby
boost
booth
booty
booze
boozy
borax
borne
bosom
bossy
botch
bough
boule
bound
bowel
boxer
brace
braid
brain
brake
brand
brash
brass
brave
bravo
brawl
brawn
bread
break
breed
briar
bribe
brick
bride
brief
brine
bring
brink
briny
brisk
broad
broil
broke
brood
brook
broom
broth
brown
brunt
brush
brute
buddy
budge
buggy
bugle
build
built
bulge
bulky
bully
bunch
bunny
burly
burnt
burst
bused
bushy
butch
butte
buxom
buyer
bylaw
cabal
cabby
cabin
cable
cacao
cache
cacti
caddy
cadet
cagey
cairn
camel
cameo
canal
candy
canny
canoe
canon
caper
caput
carat
cargo
carol
carry
carve
caste
catch
cater
catty
caulk
cause
cavil
cease
cedar
cello
chafe
chaff
chain
chair
chalk
champ
chant
chaos
chard
charm
chart
chase
chasm
cheap
cheat
check
cheek
cheer
chess
chest
chick
chide
chief
child
chili
chill
chime
china
chirp
chock
choir
choke
chord
chore
chose
chuck
chump
chunk
churn
chute
cider
cigar
cinch
circa
civic
civil
clack
claim
clamp
clang
clank
clash
clasp
class
clean
clear
cleat
cleft
clerk
click
cliff
climb
cling
clink
cloak
clock
clone
close
cloth
cloud
clout
clove
clown
cluck
clued
clump
clung
coach
coast
cobra
cocoa
colon
color
comet
comfy
comic
comma
conch
condo
conic
copse
coral
corer
corny
couch
cough
could
count
coupe
court
coven
cover
covet
covey
cower
coyly
crack
craft
cramp
crane
crank
crash
crass
crate
crave
crawl
craze
crazy
creak
cream
credo
creed
creek
creep
creme
crepe
crept
cress
crest
crick
cried
crier
crime
crimp
crisp
croak
crock
crone
crony
crook
cross
croup
crowd
crown
crude
cruel
crumb
crump
crush
crust
crypt
cubic
cumin
curio
curly
curry
curse
curve
curvy
cutie
cyber
cycle
cynic
daddy
daily
dairy
daisy
dally
dance
dandy
datum
daunt
dealt
death
debar
debit
debug
debut
decal
decay
decor
decoy
decry
defer
deign
deity
delay
delta
delve
demon
demur
denim
dense
depot
depth
derby
deter
detox
deuce
devil
diary
dicey
digit
dilly
dimly
diner
dingo
dingy
diode
dirge
dirty
disco
ditch
ditto
ditty
diver
dizzy
dodge
dodgy
dogma
doing
dolly
donor
donut
dopey
doubt
dough
dowdy
dowel
downy
dowry
dozen
draft
drain
drake
drama
drank
drape
drawl
drawn
dread
dream
dress
dried
drier
drift
drill
drink
drive
droit
droll
drone
drool
droop
dross
drove
drown
druid
drunk
dryer
dryly
duchy
dully
dummy
dumpy
dunce
dusky
dusty
dutch
duvet
dwarf
dwell
dwelt
dying
eager
eagle
early
earth
easel
eaten
eater
ebony
eclat
edict
edify
eerie
egret
eight
eject
eking
elate
elbow
elder
elect
elegy
elfin
elide
elite
elope
elude
email
embed
ember
emcee
empty
enact
endow
enema
enemy
enjoy
ennui
ensue
enter
entry
envoy
epoch
epoxy
equal
equip
erase
erect
erode
error
erupt
essay
ester
ether
ethic
ethos
etude
evade
event
every
evict
evoke
exact
exalt
excel
exert
exile
exist
expel
extol
extra
exult
eying
fable
facet
faint
fairy
faith
false
fancy
fanny
farce
fatal
fatty
fault
fauna
favor
feast
fecal
feign
fella
felon
femme
femur
fence
feral
ferry
fetal
fetch
fetid
fetus
fever
fewer
fiber
ficus
field
fiend
fiery
fifth
fifty
fight
filer
filet
filly
filmy
filth
final
finch
finer
first
fishy
fixer
fizzy
fjord
flack
flail
flair
flake
flaky
flame
flank
flare
flash
flask
fleck
fleet
flesh
flick
flier
fling
flint
flirt
float
flock
flood
floor
flora
floss
flour
flout
flown
fluff
fluid
fluke
flume
flung
flunk
flush
flute
flyer
foamy
focal
focus
foggy
foist
folio
folly
foray
force
forge
forgo
forte
forth
forty
forum
found
foyer
frail
frame
frank
fraud
freak
freed
freer
fresh
friar
fried
frill
frisk
fritz
frock
frond
front
frost
froth
frown
froze
fruit
fudge
fugue
fully
fungi
funky
funny
furor
furry
fussy
fuzzy
gaffe
gaily
gamer
gamma
gamut
gassy
gaudy
gauge
gaunt
gauze
gavel
gawky
gayer
gayly
gazer
gecko
geeky
geese
genie
genre
ghost
ghoul
giant
giddy
gipsy
girly
girth
given
giver
glade
gland
glare
glass
glaze
gleam
glean
glide
glint
gloat
globe
gloom
glory
gloss
glove
glyph
gnash
gnome
godly
going
golem
golly
gonad
goner
goody
gooey
goofy
goose
gorge
gouge
gourd
grace
grade
graft
grail
grain
grand
grant
grape
graph
grasp
grass
grate
grave
gravy
graze
great
greed
green
greet
grief
grill
grime
grimy
grind
gripe
groan
groin
groom
grope
gross
group
grout
grove
growl
grown
gruel
gruff
grunt
guard
guava
guess
guest
guide
guild
guile
guilt
guise
gulch
gully
gumbo
gummy
guppy
gusto
gusty
gypsy
habit
hairy
halve
handy
happy
hardy
harem
harpy
harry
harsh
haste
hasty
hatch
hater
haunt
haute
haven
havoc
hazel
heady
heard
heart
heath
heave
heavy
hedge
hefty
heist
helix
hello
hence
heron
hilly
hinge
hippo
hippy
hitch
hoard
hobby
hoist
holly
homer
honey
honor
horde
horny
horse
hotel
hotly
hound
house
hovel
hover
howdy
human
humid
humor
humph
humus
hunch
hunky
hurry
husky
hussy
hutch
hydro
hyena
hymen
hyper
icily
icing
ideal
idiom
idiot
idler
idyll
igloo
iliac
image
imbue
impel
imply
inane
inbox
incur
index
inept
inert
infer
ingot
inlay
inlet
inner
input
inter
intro
ionic
irate
irony
islet
issue
itchy
ivory
jaunt
jazzy
jelly
jerky
jetty
jewel
jiffy
joint
joist
joker
jolly
joust
judge
juice
juicy
jumbo
jumpy
junta
junto
juror
kappa
karma
kayak
kebab
khaki
kinky
kiosk
kitty
knack
knave
knead
kneed
kneel
knelt
knife
knock
knoll
known
koala
krill
label
labor
laden
ladle
lager
lance
lanky
lapel
lapse
large
larva
lasso
latch
later
lathe
latte
laugh
layer
leach
leafy
leaky
leant
leapt
learn
lease
leash
least
leave
ledge
leech
leery
lefty
legal
leggy
lemon
lemur
leper
level
lever
libel
liege
light
liken
lilac
limbo
limit
linen
liner
lingo
lipid
lithe
liver
livid
llama
loamy
loath
lobby
local
locus
lodge
lofty
logic
login
loopy
loose
lorry
loser
louse
lousy
lover
lower
lowly
loyal
lucid
lucky
lumen
lumpy
lunar
lunch
lunge
lupus
lurch
lurid
lusty
lying
lymph
lyric
macaw
macho
macro
madam
madly
mafia
magic
magma
maize
major
maker
mambo
mamma
mammy
manga
mange
mango
mangy
mania
manic
manly
manor
maple
march
marry
marsh
mason
masse
match
matey
mauve
maxim
maybe
mayor
mealy
meant
meaty
mecca
medal
media
medic
melee
melon
mercy
merge
merit
merry
metal
meter
metro
micro
midge
midst
might
milky
mimic
mince
miner
minim
minor
minty
minus
mirth
miser
missy
mocha
modal
model
modem
mogul
moist
molar
moldy
money
month
moody
moose
moral
moron
morph
mossy
motel
motif
motor
motto
moult
mound
mount
mourn
mouse
mouth
mover
movie
mower
mucky
mucus
muddy
mulch
mummy
munch
mural
murky
mushy
music
musky
musty
myrrh
nadir
naive
nanny
nasal
nasty
natal
naval
navel
needy
neigh
nerdy
nerve
never
newer
newly
nicer
niche
niece
night
ninja
ninny
ninth
noble
nobly
noise
noisy
nomad
noose
north
nosey
notch
novel
nudge
nurse
nutty
nylon
nymph
oaken
obese
occur
ocean
octal
octet
odder
oddly
offal
offer
often
olden
older
olive
ombre
omega
onion
onset
opera
opine
opium
optic
orbit
order
organ
other
otter
ought
ounce
outdo
outer
outgo
ovary
ovate
overt
ovine
ovoid
owing
owner
oxide
ozone
paddy
pagan
paint
paler
palsy
panel
panic
pansy
papal
paper
parer
parka
parry
parse
party
pasta
paste
pasty
patch
patio
patsy
patty
pause
payee
payer
peace
peach
pearl
pecan
pedal
penal
pence
penne
penny
perch
peril
perky
pesky
pesto
petal
petty
phase
phone
phony
photo
piano
picky
piece
piety
piggy
pilot
pinch
piney
pinky
pinto
piper
pique
pitch
pithy
pivot
pixel
pixie
pizza
place
plaid
plain
plait
plane
plank
plant
plate
plaza
plead
pleat
plied
plier
pluck
plumb
plume
plump
plunk
plush
poesy
point
poise
poker
polar
polka
polyp
pooch
poppy
porch
poser
posit
posse
pouch
pound
pouty
power
prank
prawn
preen
press
price
prick
pride
pried
prime
primo
print
prior
prism
privy
prize
probe
prone
prong
proof
prose
proud
prove
prowl
proxy
prude
prune
psalm
pubic
pudgy
puffy
pulpy
pulse
punch
pupil
puppy
puree
purer
purge
purse
pushy
putty
pygmy
quack
quail
quake
qualm
quark
quart
quash
quasi
queen
queer
quell
query
quest
queue
quick
quiet
quill
quilt
quirk
quite
quota
quote
quoth
rabbi
rabid
racer
radar
radii
radio
rainy
raise
rajah
rally
ralph
ramen
ranch
randy
range
rapid
rarer
raspy
ratio
ratty
raven
rayon
razor
reach
react
ready
realm
rearm
rebar
rebel
rebus
rebut
recap
recur
recut
reedy
refer
refit
regal
rehab
reign
relax
relay
relic
remit
renal
renew
repay
repel
reply
rerun
reset
resin
retch
retro
retry
reuse
revel
revue
rhino
rhyme
rider
ridge
rifle
right
rigid
rigor
rinse
ripen
riper
risen
riser
risky
rival
river
rivet
roach
roast
robin
robot
rocky
rodeo
roger
rogue
roomy
roost
rotor
rouge
rough
round
rouse
route
rover
rowdy
rower
royal
ruddy
ruder
rugby
ruler
rumba
rumor
rupee
rural
rusty
sadly
safer
saint
salad
sally
salon
salsa
salty
salve
salvo
sandy
saner
sappy
sassy
satin
satyr
sauce
saucy
sauna
saute
savor
savoy
savvy
scald
scale
scalp
scaly
scamp
scant
scare
scarf
scary
scene
scent
scion
scoff
scold
scone
scoop
scope
score
scorn
scour
scout
scowl
scram
scrap
scree
screw
scrub
scrum
scuba
sedan
seedy
segue
seize
semen
sense
sepia
serif
serum
serve
setup
seven
sever
sewer
shack
shade
shady
shaft
shake
shaky
shale
shall
shalt
shame
shank
shape
shard
share
shark
sharp
shave
shawl
shear
sheen
sheep
sheer
sheet
sheik
shelf
shell
shied
shift
shine
shiny
shire
shirk
shirt
shoal
shock
shone
shook
shoot
shore
shorn
short
shout
shove
shown
showy
shrew
shrub
shrug
shuck
shunt
shush
shyly
siege
sieve
sight
sigma
silky
silly
since
sinew
singe
siren
sissy
sixth
sixty
skate
skier
skiff
skill
skimp
skirt
skulk
skull
skunk
slack
slain
slang
slant
slash
slate
sleek
sleep
sleet
slept
slice
slick
slide
slime
slimy
sling
slink
sloop
slope
slosh
sloth
slump
slung
slunk
slurp
slush
slyly
smack
small
smart
smash
smear
smell
smelt
smile
smirk
smite
smith
smock
smoke
smoky
smote
snack
snail
snake
snaky
snare
snarl
sneak
sneer
snide
sniff
snipe
snoop
snore
snort
snout
snowy
snuck
snuff
soapy
sober
soggy
solar
solid
solve
sonar
sonic
sooth
sooty
sorry
sound
south
sower
space
spade
spank
spare
spark
spasm
spawn
speak
spear
speck
speed
spell
spelt
spend
spent
sperm
spice
spicy
spied
spiel
spike
spiky
spill
spilt
spine
spiny
spire
spite
splat
split
spoil
spoke
spoof
spook
spool
spoon
spore
sport
spout
spray
spree
sprig
spunk
spurn
spurt
squad
squat
squib
stack
staff
stage
staid
stain
stair
stake
stale
stalk
stall
stamp
stand
stank
stare
stark
start
stash
state
stave
stead
steak
steal
steam
steed
steel
steep
steer
stein
stern
stick
stiff
still
stilt
sting
stink
stint
stock
stoic
stoke
stole
stomp
stone
stony
stood
stool
stoop
store
stork
storm
story
stout
stove
strap
straw
stray
strip
strut
stuck
study
stuff
stump
stung
stunk
stunt
style
suave
sugar
suing
suite
sulky
sully
sumac
sunny
super
surer
surge
surly
sushi
swami
swamp
swarm
swash
swath
swear
sweat
sweep
sweet
swell
swept
swift
swill
swine
swing
swirl
swish
swoon
swoop
sword
swore
sworn
swung
synod
syrup
tabby
table
taboo
tacit
tacky
taffy
taint
taken
taker
tally
talon
tamer
tango
tangy
taper
tapir
tardy
tarot
taste
tasty
tatty
taunt
tawny
teach
teary
tease
teddy
teeth
tempo
tenet
tenor
tense
tenth
tepee
tepid
terra
terse
testy
thank
theft
their
theme
there
these
theta
thick
thief
thigh
thing
think
third
thong
thorn
those
three
threw
throb
throw
thrum
thumb
thump
thyme
tiara
tibia
tidal
tiger
tight
tilde
timer
timid
tipsy
titan
tithe
title
toast
today
toddy
token
tonal
tonga
tonic
tooth
topaz
topic
torch
torso
torus
total
totem
touch
tough
towel
tower
toxic
toxin
trace
track
tract
trade
trail
train
trait
tramp
trash
trawl
tread
treat
trend
triad
trial
tribe
trice
trick
tried
tripe
trite
troll
troop
trope
trout
trove
truce
truck
truer
truly
trump
trunk
truss
trust
truth
tryst
tubal
tuber
tulip
tulle
tumor
tunic
turbo
tutor
twang
tweak
tweed
tweet
twice
twine
twirl
twist
twixt
tying
udder
ulcer
ultra
umbra
uncle
uncut
under
undid
undue
unfed
unfit
unify
union
unite
unity
unlit
unmet
unset
untie
until
unwed
unzip
upper
upset
urban
urine
usage
usher
using
usual
usurp
utile
utter
vague
valet
valid
valor
value
valve
vapid
vapor
vault
vaunt
vegan
venom
venue
verge
verse
verso
verve
vicar
video
vigil
vigor
villa
vinyl
viola
viper
viral
virus
visit
visor
vista
vital
vivid
vixen
vocal
vodka
vogue
voice
voila
vomit
voter
vouch
vowel
vying
wacky
wafer
wager
wagon
waist
waive
waltz
warty
waste
watch
water
waver
waxen
weary
weave
wedge
weedy
weigh
weird
welch
welsh
whack
whale
wharf
wheat
wheel
whelp
where
which
whiff
while
whine
whiny
whirl
whisk
white
whole
whoop
whose
widen
wider
widow
width
wield
wight
willy
wimpy
wince
winch
windy
wiser
wispy
witch
witty
woken
woman
women
woody
wooer
wooly
woozy
wordy
world
worry
worse
worst
worth
would
wound
woven
wrack
wrath
wreak
wreck
wrest
wring
wrist
write
wrong
wrote
wrung
wryly
yacht
yearn
yeast
yield
young
youth
zebra
zesty
zonal`;
const RAW_WORDS = `women
nikau
swack
feens
fyles
poled
clags
starn
bindi
woops
fanos
cabin
souct
trass
shoat
lefty
durra
hypes
junta
baisa
bises
kipps
sable
abacs
thurl
nurrs
saris
wroth
venal
texas
soman
linds
laden
nolos
pixie
calms
chert
oxbow
groma
nomen
potae
noyed
fifty
emerg
shtup
aspic
shone
junky
louns
babka
roton
abaft
hykes
nipas
inbye
kaing
pukus
muils
snowy
piled
brook
avens
baiza
edger
fawns
genii
mavis
argal
assay
cocas
shash
wrath
thins
karat
tunny
mudge
syped
chose
zupas
hants
leech
lyric
winds
mened
momus
usher
qophs
ombus
gavel
swive
slant
firns
beigy
unlid
flegs
wangs
awner
claut
ceded
manos
fuggy
bunde
shute
snoke
bulky
cents
agama
chess
ranid
flurr
dewar
night
porks
voema
cimex
samfu
query
snipy
glens
kests
peril
falls
urges
krunk
tased
folia
orgia
verve
rinks
choko
hully
fakey
durgy
polje
sects
giant
iftar
hayed
elfed
likes
sword
banty
blech
daubs
exies
tetra
agros
shier
kines
yanks
herma
bitte
spook
ribby
fazes
faqir
pluck
devos
bares
looks
sepad
blats
splay
wimpy
husos
forge
femes
irony
hurra
annoy
macas
phons
gymps
sepic
horde
redox
raise
venom
balks
houff
bivvy
farci
sodas
salvo
gumbo
monad
tidal
jammy
gurly
gapes
drere
seems
bouge
ollas
fakir
fetta
thesp
trots
sixes
parps
rewed
wakes
gades
hired
ferny
orals
faxes
surds
larns
sophs
malts
delos
vixen
hosts
drawn
indow
oddly
grume
radix
sacra
spoom
poopy
datos
salse
skean
loess
sownd
boast
tragi
noyau
yeven
blore
tawas
furor
dotes
thief
dacks
pilus
wader
ralph
dropt
illth
paged
humor
great
neves
ratio
lordy
sonic
gybes
shama
limed
salal
aorta
beach
glogg
abris
sayne
mince
dukes
sloth
laked
exeem
troys
kehua
studs
lummy
rhumb
ardeb
yeads
liney
salat
tappa
zilch
yeggs
girly
hoots
parev
gusle
awake
umiak
swang
dunts
ridgy
fakie
seils
seels
kagus
yodhs
sools
richt
runds
snark
domed
glede
urbia
laiks
keech
pinna
ebook
flips
lewis
corse
camus
swaps
delis
hamed
zowee
egers
atmas
xeric
apery
beryl
ocher
lysol
pokal
watap
metic
burns
dibbs
vares
cruor
snods
probs
undue
scaur
thole
sexed
onion
zoril
nance
deffo
prize
curds
bazar
milko
cowed
rager
corps
audio
boofy
hollo
hapax
jeune
idant
swiss
catch
gript
spewy
roble
waurs
beeps
kales
prest
geals
tater
tassa
bocce
ulans
ahull
sheik
elegy
plops
scrip
zaire
laddy
dings
punka
pacey
bilgy
chewy
hemps
jolts
greet
leans
squit
tromp
flume
rower
penne
umbra
palmy
tunas
cleek
flimp
pedal
cuppy
bundu
dweeb
pupas
prude
alter
nyaff
laxer
gerbe
anime
nieve
bwazi
brule
cider
roneo
nirls
kaugh
oases
fewer
pinny
sault
carvy
ultra
kloof
spazz
spoil
logie
orang
fices
atocs
fungi
kilos
amnia
glads
chaft
lusts
toxin
boozy
yourn
medal
maras
sowse
enmew
mains
olpae
tride
nival
loure
crook
spied
ketas
labis
tossy
yapon
tweer
peris
kudzu
odals
rosed
noser
crena
heist
pervy
amaze
neons
mirid
mured
helve
hepar
demic
besaw
molls
annex
warks
smews
warby
fayer
minks
ripes
hacek
spait
audad
clack
afros
greve
dwaal
bayts
ottar
diels
tansy
ikons
craps
phpht
glass
talar
umrah
yesks
toter
waifs
limby
alure
elint
exude
annas
sputa
ettin
oaker
yerks
noils
trier
yulan
ghast
tuile
kylin
cadet
molys
dobro
barry
disme
tifos
betid
sonar
butte
dojos
befog
noles
guyot
avels
kneel
suety
biali
perve
kieve
faves
stims
qibla
sprig
cited
tinas
profs
gamay
simis
duads
picks
sweer
sippy
mound
hault
gouts
zobos
shaws
fosse
vawte
telia
soggy
dopes
sheal
crape
jimmy
swale
loans
strop
pizes
synes
kiers
agley
matzo
bands
blahs
lymph
lysis
ruche
anion
chomp
dikas
volta
luffs
howso
quiff
bling
clomb
upper
dumps
buddy
caron
upped
shite
raxed
kamis
sweal
creep
albee
taint
bitsy
abyss
gadje
spaul
shiny
fusts
yeeds
cusks
deely
smolt
lanky
unwon
ology
anise
foram
scops
rakia
banjo
domic
hoody
shott
sooth
panim
lathi
licit
machi
vetch
boffo
belch
downa
tofus
wulls
steno
hoten
snoep
meted
halls
tryke
lovat
vardy
modal
updry
lythe
nidus
stave
kanji
poted
stabs
pargo
slews
cirri
grosz
pooks
pimps
emmys
flies
nelly
felly
nuffs
amity
vodun
stock
cacti
skips
whops
apian
acted
bawty
lande
tufts
besot
mewls
sunns
pulus
paint
gouch
scrag
quote
louis
heeds
jihad
minus
unban
ranke
licht
ishes
grees
gimpy
paren
nudzh
thawy
toras
laten
enoki
limey
biked
grans
emmas
enews
aweel
sedum
askew
arish
fusee
tolas
carve
rayle
emits
dampy
fakes
meson
gaita
fauve
slung
vowel
goffs
fogou
vinic
ratan
becke
algal
manis
gelds
erred
pekoe
flitt
dotty
tronc
loirs
firie
gonks
joles
lumen
sensa
undid
dhobi
tuner
skail
homey
alack
clear
slums
mange
weamb
papas
smoot
buats
hooka
recco
agars
plank
bolas
bolix
hashy
easel
wasps
sexto
queer
wacke
crits
moria
uncos
kibei
parly
ebbet
rusks
kibbe
buppy
zeals
glout
bigly
stool
avale
wales
fermi
unred
puppy
swayl
peage
bingy
verts
baaed
mogul
beany
debel
mifty
levis
gowfs
winks
musha
bayes
bidet
starr
cloye
ennui
hussy
cosey
coset
darcy
iodid
treks
tsars
groof
razoo
polls
clame
pilei
bunns
donko
fedex
vasal
enema
gaffe
slash
prise
mandi
solve
dames
hullo
snarl
monty
wuxia
beige
reech
solus
doggy
evohe
papal
dolce
awork
cedar
youse
mamey
icily
scoup
zonda
whamo
serry
coyed
amine
mudra
clews
proof
horny
jarul
falaj
clons
limbs
anyon
lanch
muled
kirri
kroon
skees
gothy
james
chirr
yarta
rayas
femme
kasha
milos
asyla
tanks
unbox
umber
crine
situp
singe
pyrex
flote
yogis
scrow
kypes
esses
istle
jeeps
zendo
rough
tight
stewy
scent
arett
yelts
apode
hoaed
ivies
heids
twire
sighs
coppy
jotun
chems
benes
jebel
swaly
holks
doest
fluky
wares
cusso
reist
darbs
peans
erven
peeoy
curls
sways
blaud
nowts
proso
zooid
liard
oundy
sughs
jehus
cotts
guess
teste
bizes
loipe
liart
gitch
mauds
mufti
vutty
haver
diker
score
araks
wekas
nuked
nervy
spiff
orbed
buyer
routs
impel
truly
presa
whats
naans
seams
flint
rives
matai
culpa
frere
wazir
logon
gungy
wrang
fenis
rakes
fores
duroc
ailed
clous
toyon
sawer
tikis
withy
embed
subas
dadas
bacca
epees
kamas
earst
prole
cimar
dirts
strep
mount
lacet
wrier
nites
nomas
rearm
yclad
galed
owsen
tints
sculk
culet
swamp
homie
keens
genny
split
anvil
stoln
sazes
pesky
bento
witan
besit
clubs
causa
weids
theic
fitch
deere
kelim
chare
simas
madam
jumbo
pronk
enols
jails
tohos
kagos
plues
aboil
bangs
graze
kauri
rewin
weize
hadji
misdo
parma
urent
laich
panni
deary
coses
exome
mohel
poems
axoid
chump
puked
apers
claro
slade
fetts
mutts
rural
vower
argan
stook
muids
budge
arvos
cynic
fasci
jurel
grand
gynie
garbs
cuffs
beget
abled
artel
miens
shops
piums
maxis
kwela
rigid
vends
farts
asana
viers
later
haith
motte
kokas
cooed
drent
ekkas
whata
sweir
borne
karas
heats
etude
regna
resew
bulbs
balus
order
jibba
cocoa
hauds
exuls
spuer
frena
karos
these
skier
sclim
jaggy
coost
kulfi
rhomb
rejon
jupon
awarn
bowie
spets
pipet
debug
folie
moyle
rauns
sooms
carpi
proas
siren
shyly
doers
walks
doric
smees
skeed
ricin
lassu
aboma
qaids
asper
scull
glost
chord
brant
kefir
topic
gibel
nimps
zigan
twirp
lazes
pawls
wells
coned
wembs
frats
genom
quota
brunt
spout
tache
trunk
wifed
acini
coast
manta
coopt
tabid
dauds
crank
untie
nasal
shine
sauls
yeuky
sturt
odder
gucks
lungs
dight
rawer
rykes
limns
stoit
crumb
dewed
moldy
kreep
frith
opsin
bools
kempy
kohas
slurp
nudie
ephas
email
skosh
tolly
speks
patio
congo
kanes
swile
kneed
merge
ycled
hewgh
loyal
stens
blent
alapa
gulag
medle
nagor
lulls
sawah
spier
poufs
lunch
stupe
sewen
shend
dirls
trows
iched
hello
leery
lowse
boron
aunts
trash
naiks
crows
poult
emove
inorb
local
rorid
pumie
gloom
bolus
fogie
peach
erick
guppy
lurgy
popes
veges
taken
redye
spred
sugar
reird
chubs
grail
paler
ydred
stoas
exile
child
yaars
snide
snips
album
rebit
mochs
looby
raphe
tawny
pioys
makar
cowan
slipt
tyros
saith
caved
colts
unrip
pases
saran
tykes
allod
ovals
festa
puers
pight
treif
cocky
feeds
blads
gouks
brail
skald
feted
realo
allot
delph
oumas
sklim
shlep
angle
silts
stand
jibed
frows
tayra
sculp
dicht
spags
pebas
nurse
prows
hubby
togas
helot
hangs
neele
pools
bidis
hoers
abuts
serif
scuba
copsy
lumme
numbs
yogic
sober
biped
lawks
mixen
yurts
hokey
stied
gowan
chary
pendu
rojak
punga
soree
hoods
sefer
mabes
plume
dowel
shrug
oucht
vista
fatwa
diode
kents
swoun
barps
obiit
hosta
kanga
sophy
quich
bravi
skied
spaza
faurd
karts
waide
coper
broke
gayer
pieta
pengo
lokes
amole
cruet
busty
rewon
jorum
shave
maths
jotas
sifts
kophs
nisus
pucer
sekos
nadas
punky
ameba
lupin
iambs
revel
wiles
vairy
tesla
ouped
skite
teads
cusec
citer
ratel
gleam
lends
hater
saims
strig
kalpa
foamy
drats
dowse
atimy
opepe
basho
bield
hasty
rheas
filer
moors
skirl
slogs
sayed
hoord
thaim
hetes
roast
hitch
roins
jhala
levee
woven
cites
yacht
maile
ancon
divvy
romal
gapos
bedim
roded
wagga
banda
swear
linny
welkt
nixes
yangs
slorm
splat
skelp
perdy
comby
spike
ender
sapid
muhly
agger
arose
chops
mitis
gompa
skids
nines
leges
baric
psora
bayer
disas
bribe
bower
tawse
pyxed
coven
purin
sokol
tuffs
ileus
grebo
seeps
spicy
ninon
floes
mozes
chant
tasso
dauts
wenge
cabal
mammy
yuppy
ginny
karma
softs
yirrs
morse
newsy
renga
grues
alang
ahold
chaos
pyned
gemmy
solid
conus
dryas
burks
thraw
cotta
rurus
octan
resee
poncy
balls
sybil
vesta
wonts
kilty
reedy
charr
upled
aidos
epoxy
surra
soils
barfi
guyse
aryls
convo
nepit
lakes
maize
neper
zooty
voted
murti
izzat
glaur
bohos
pelas
lomes
jambs
semes
donne
middy
barge
jazzy
moose
sicks
loggy
xylan
noons
judge
toaze
roids
doeth
palla
luvvy
farer
treyf
oculi
shuts
ureal
yummy
octas
cased
slump
argle
bigos
janns
gnaws
scags
pouks
plaps
vrils
swash
cline
fuffy
viffs
neeps
birls
quoll
duped
barde
porty
byway
siree
stria
hushy
ingot
genre
kists
deens
begin
mooli
retox
noway
camos
alary
tommy
ulnar
fetwa
oshac
tower
elute
brool
thoft
beset
rebuy
slays
amble
blady
fetor
pimas
coits
daggy
crore
metho
noyes
eejit
luter
beare
nills
relet
delve
spunk
eying
curio
kolas
wiver
apiol
meals
malls
zooms
kades
psych
harks
soars
juice
fremd
joule
laund
ovine
aggry
zitis
spite
guimp
powan
knops
spade
bully
muser
taboo
tress
fatso
thine
cardy
dorad
lepra
ulcer
lamer
huzzy
yucca
cital
aloes
dowdy
acned
danks
villi
crams
appel
heart
lakhs
talls
clans
squat
yowed
synth
grebe
telos
annal
props
hilar
metre
arled
shorn
aarti
swamy
crias
float
flesh
tinty
dedal
above
sonse
minar
tanna
tikes
salts
madid
poupt
lager
maced
guilt
reccy
sever
hoove
scyes
kafir
tangy
hillo
scant
comal
simul
liner
stele
borax
azygy
mises
tiges
roary
spiky
lived
waxed
duded
brers
cowps
grips
roons
pilar
poser
cesta
thill
huhus
waxer
testy
phage
loins
grama
flexo
pound
dobes
kaput
ratal
cacks
upjet
henry
javel
resus
weepy
fussy
onely
mirin
gests
shura
akene
bohea
haler
wames
grufe
amiga
kaama
synch
duked
raser
shwas
width
rehem
eyras
tates
preys
knave
raper
litho
solas
zuzim
batch
biggs
smirr
dryad
skeef
hanky
imply
sujee
xylyl
cheat
bords
ilial
bowne
silos
samel
cater
gleis
sicko
primy
pechs
tiros
glams
becks
wilis
rowie
goold
ligne
aures
spelk
pepla
fired
devil
goxes
corni
sicky
tutus
pians
zymes
viold
staig
roose
undos
dolma
qanat
moust
doole
soger
agios
nalla
garda
kylie
eking
fairs
snell
urped
rumly
brack
chiel
valse
frier
psalm
flays
lucks
karri
mensa
luxer
spahi
aurar
moory
ensue
cameo
dwams
cuber
urbex
walie
reggo
ankus
irids
ervil
slopy
greed
snoop
mugga
zoeal
poyse
ivory
urena
eruct
trave
ranee
flubs
holme
rhone
jutty
tanky
whirl
limit
prosy
joker
sneed
asset
czars
lefts
ouzel
moats
nicad
tawer
softy
creme
lemel
modes
dopas
sopor
cleat
lomed
unica
talks
hutch
ulnas
abbed
azure
excel
hicks
eloge
onlay
dobie
krans
shiur
idees
puhas
oxims
eched
plims
terse
molds
corby
heave
rifts
lucre
puker
heady
sabre
frogs
cuing
sabes
frets
occam
abohm
tases
baffs
quais
black
mumms
gnats
roost
lites
linin
boars
sorgo
hists
apage
sural
kobos
churl
twill
puzel
tholi
greek
humpy
enjoy
genas
cotes
cohog
snary
kavas
poyou
fairy
peeve
levas
colby
qubit
terfs
cromb
cogue
zoppa
thens
herds
hests
poney
oaths
oxids
tirls
huers
diddy
rorie
radon
syned
apeak
smeke
wises
lehrs
direr
buffo
laced
peise
hertz
mitts
zaida
bloop
kydst
boygs
amies
zayin
gifts
rebar
viols
gluts
motza
begar
nomic
mummy
poofs
besat
hajes
jetes
niffy
rifle
frust
footy
hemal
copse
foids
bison
horst
tomos
mused
joled
rimae
spill
crops
gogga
parch
fades
hyrax
ewked
garum
flame
kutis
fovea
capos
fords
harns
fives
dwarf
gross
redia
colds
hogan
vlogs
soare
dowly
looky
spalt
tined
hills
trims
fraud
sorry
fritt
horal
mamas
gummy
cangs
torcs
kerne
feral
pharm
queys
looie
ofter
pygal
sites
geste
pooed
ragis
rapid
start
besom
justs
skugs
shogi
haoma
slurb
lezzy
datto
intra
amoks
spies
sukhs
rater
broil
waive
intil
vomit
breid
syrup
axons
curch
fauld
cupel
knish
drake
faena
dogey
shily
pyets
chavs
airth
genie
salop
zebub
twite
rayed
teats
culty
jures
snafu
mosey
kvell
cigar
zonks
yelps
ulnae
swole
rotor
buaze
wootz
trail
speal
odeum
mongs
milch
draft
harls
rugae
quoad
innit
kelpy
aphis
davit
manus
bobos
point
atrip
twirl
waspy
wynds
santo
gnarl
phyla
ponks
grrls
tiler
semie
clump
sidhe
naves
dooms
swath
daynt
donee
waffs
blebs
fouer
mpret
feese
seise
napas
civil
qualm
darre
hands
decaf
ramie
trial
folic
estop
peeks
bride
mines
stunk
spars
tabis
aiery
frugs
cycad
solan
dairy
bries
emule
comus
guaco
pager
ramen
louie
gowds
zaris
duars
voile
witty
kidel
pulka
ascon
skios
jarls
finos
noirs
stale
azole
womby
short
umiaq
exeat
heare
pined
leben
malus
vizir
cycle
seism
limma
zones
dells
north
drain
pouch
timon
caums
wakfs
sowce
doeks
caids
roily
shiel
tense
hakam
timer
wends
clips
serac
fagin
tummy
clint
honor
namer
ummas
boked
lobed
gluey
pards
scend
resod
bored
fleys
jinns
agita
pened
edits
biffo
blain
yabas
radar
yucky
veale
caboc
skelm
yabba
runts
waddy
lemme
merse
celli
fones
itchy
lower
towts
bleat
mekka
chibs
crump
meads
konbu
shmoe
jubas
bhats
prion
phene
dicey
nashi
halse
apish
rafts
queue
moved
currs
oboli
souks
boxes
gorps
zocco
ergot
wafts
ruins
saser
aghas
gyral
kulan
index
sapan
poake
tavas
madre
afald
bidon
tumps
asdic
combe
nubia
scowp
aider
mutis
taber
emoji
trets
spugs
dench
fight
fatly
sires
storm
kudos
scogs
hyphy
unhat
mille
mommy
misgo
piles
cadee
poops
youth
latke
bufos
drape
budas
tunes
clime
bayle
mails
lauan
yarto
skoal
ytost
guyed
luxed
kebob
mosed
sekts
pizza
hurts
eeven
freit
bingo
micra
rouls
riffs
afoot
egest
duddy
bombs
uprun
kebab
chowk
vinew
upbow
jokes
dagga
temse
sofas
godet
fuzil
yocks
shews
ditts
spork
felon
moron
gator
sneak
licks
hajis
gigot
cerci
tubby
whizz
spims
aloha
arval
leper
dribs
bubas
blets
rabid
began
drops
petti
pinko
sixmo
sigil
grypt
rolag
logia
adorn
hoagy
appui
rudie
vlies
tepee
cramp
byded
scaud
icing
warst
fubar
apace
poral
reifs
cavel
tolan
leash
sushi
avyze
pikul
gloss
unces
aging
thank
payor
tempt
calyx
bawks
malva
goads
miaul
trooz
pasty
luaus
rotan
mowed
preon
tocos
nasty
armet
porae
boose
amass
cuddy
gyron
hooly
safes
gaitt
bemud
queen
neddy
hodad
spray
steal
lerps
vizor
muset
riems
mofos
jawed
camps
slues
feers
faced
vespa
admen
riced
lifes
teene
foxie
stown
marri
jones
cists
plays
mouch
yonic
droll
lifts
antes
third
worth
proul
boned
arums
tutty
ovary
turme
moten
rubby
nazis
aurae
eusol
adsum
gazes
usure
leggo
chino
loper
dargs
owler
eilds
sting
terga
payer
nears
hemes
eupad
naker
kilts
roque
gilet
pandy
sills
fomes
coude
hypha
mooks
lubra
fangs
sulph
frill
bails
gooby
pelau
unmix
ajwan
maims
atuas
mingy
cacao
cored
wirer
boule
tians
birrs
mensh
riels
sound
dawts
toney
syver
spode
prore
micos
miler
deros
snick
labra
weest
vasty
jobed
aisle
rugby
cobby
ingan
dines
maneh
bauds
tunds
smear
coths
pasts
daffs
quipo
renin
slake
laers
dumbo
slove
booed
leish
molts
titre
sweed
hover
leavy
visor
antra
pogos
cycas
dawah
razee
poaka
bedad
stowp
ryots
ceili
panes
molto
coats
afrit
mneme
awdls
molly
hoosh
cyano
rekes
dosai
slaws
daals
speck
neigh
press
saury
toman
lists
birsy
smote
petar
brute
lisks
glazy
rears
teres
zoned
etens
armil
aroma
sloot
bardy
hecht
mobey
garbe
drawl
facet
entry
paean
nobly
mirvs
bisks
rebid
algid
gists
radge
ticks
ariot
daint
ester
pudus
reffo
parse
spool
siler
jades
aizle
trite
livid
ouphs
drily
sages
kebar
ratas
bykes
evets
upend
skank
tryst
fiest
laufs
marra
adage
sadly
clefs
conns
dazer
shore
estoc
naive
apays
atoms
trapt
angel
decko
gryde
dates
gimel
kanzu
kranz
payee
iodic
story
mushy
canon
paled
shogs
cerne
loser
seers
alaap
nided
snore
tizzy
henna
ribes
updos
gauze
helps
vuggs
teddy
veers
shaya
alkos
ranks
plica
regos
axils
kempt
eigne
lassi
waqfs
zizel
nooky
noses
volks
beard
taggy
beedi
senvy
mieve
teels
dulia
pores
slomo
boyla
haars
claes
pongs
tongs
musth
telex
bluid
walla
haick
deevs
smout
gaols
inane
arhat
reeve
frags
marms
pavin
earls
rents
bylaw
mayed
putid
other
crock
bouks
yolks
stalk
goods
durzi
yaups
capon
ammos
arked
unrig
elain
slept
giust
shies
caned
sheds
jooks
soums
incus
shads
skart
cyton
polar
blini
mesne
fumer
gauch
hadst
ahead
croci
muzak
topes
tegua
lauch
dinic
cills
eruvs
tween
joins
gypos
trank
birle
layup
cadis
pises
cabre
grace
trust
sojas
harpy
yukes
trews
opera
keema
undee
guild
entia
swoop
chias
boyed
armer
thymy
comms
aroba
curvy
quino
jiggy
payed
lifer
mirly
neist
betes
baghs
golps
paseo
mucky
coals
mohur
cabby
bolos
fikes
sorbs
chaya
feyly
divan
reuse
pisos
dempt
bowse
damns
laugh
waulk
mason
hexad
ruder
ohone
swish
hazed
gundy
jauks
gaths
gajos
scand
neive
ummah
skyte
comes
khazi
toyer
scrog
juror
buses
fazed
stott
seame
urvas
wards
vinal
gaspy
deash
oggin
hause
tweel
touse
groks
hwyls
plump
tafia
niffs
nodal
patus
laura
yoick
germs
tozed
laids
feare
ginks
saice
camel
flisk
swops
labia
tusks
auloi
halid
masse
mercs
kooks
ryals
slops
macks
doilt
meres
moult
wairs
hauld
strae
baddy
kraut
lemes
songs
grogs
comfy
topis
cares
bowls
atmos
losed
gadjo
warbs
laces
bepat
vulns
glime
lytta
pilaw
murls
anode
meers
casco
mulse
grabs
agues
burnt
dalle
wince
murly
hempy
olios
pubco
lardy
gulas
gilas
lungi
elans
haros
belly
rojis
carte
beery
clied
budos
soppy
sowed
winos
valis
jagra
peers
sally
ablet
plast
cyclo
crabs
taluk
jucos
metif
labda
lethe
mucks
kaiks
gamer
treed
manty
wheft
spitz
orval
grece
easts
swire
grout
septs
eaved
bhaji
duply
trams
lited
smuts
nexus
mures
bubba
teeny
aggie
nymph
elsin
piler
ympes
ewest
pisco
blays
guqin
tatty
enlit
dongs
antic
hyena
spear
skegg
ether
slobs
blees
steds
brawl
ohing
warts
seare
rider
alant
gleys
urged
gaids
vigas
coomy
mbira
aloin
rubin
rabis
copes
grots
kerky
reate
cytes
gelee
hobby
flams
anile
dawns
flors
raked
filar
stull
cleve
floss
trice
salut
chapt
palsy
doobs
scena
rials
agloo
serow
cocco
leses
mixes
meows
inter
cinct
wagyu
skogs
pingo
clary
toils
atopy
suers
tubar
saver
monas
nouns
mulie
leare
slane
prior
elfin
refel
botte
bumph
rabbi
peepe
mural
blubs
foist
yuans
derny
stede
quoif
topaz
cunit
wined
sharp
kakis
mahwa
aleck
botts
saunt
snort
clipt
alods
jibbs
ayahs
eject
arses
yonis
inert
blate
skies
sooty
found
evhoe
gilly
dummy
fixes
runic
poods
swain
rosti
shame
feats
amnio
himbo
enate
eards
luged
abets
venae
kings
tuple
bubus
aspis
turrs
exode
agent
gynae
syren
write
ratus
genip
alews
glued
yourt
outre
loupe
twice
kabab
under
remex
rudes
dicta
shaul
scabs
cobbs
seton
wooly
gazoo
jirds
skill
jaups
etape
cells
gunny
rakis
alien
ulnad
dauby
tolts
pious
walds
servo
movie
livre
ooped
ergon
dosha
toque
mochy
quilt
belle
uhuru
yappy
loses
neaps
garbo
berks
javas
shtik
algae
prank
booms
embar
liars
wikis
covet
dashy
noule
cosie
kybos
trock
fisks
baccy
trape
homas
turds
voulu
pylon
yearn
kacha
amend
rutty
fluke
beath
ricey
grovy
sengi
leese
sists
purls
adred
krill
rorty
shams
mells
murky
sasse
gombo
slims
shays
phial
knags
fudge
loner
shoji
degas
hocus
loche
still
bunks
slang
hodja
breme
birks
perdu
waste
dusky
snarf
chivy
zezes
house
zoris
cheep
freer
flung
buist
iring
moops
blurs
skink
ensky
cadre
babas
felts
culls
avers
doner
cinqs
meany
koban
apism
mopey
embow
mings
decks
skyfs
chelp
potsy
pudsy
hiant
felch
sycee
enfix
ganof
muxed
roper
plied
lants
hanap
pipes
assam
rayon
dogma
visas
yesty
noels
beted
gauzy
meshy
terce
augur
moist
murri
dater
foyer
yaird
stiff
erect
unrid
seder
delfs
assot
fabby
nixed
mered
amuck
cease
oleos
boggy
quair
beady
vaded
combs
wodge
baels
reran
chain
baffy
cooks
souce
sedge
zouks
whams
phots
oulks
tasks
chich
guyle
piste
couta
palsa
japed
caman
savoy
inrun
gippo
kooky
pudic
laval
molla
crith
frump
orris
dodge
nexts
wrest
chile
woose
yente
lidos
gonef
sluff
googs
courd
jokey
hires
alans
demob
whilk
stews
spice
grows
aalii
carob
liefs
motto
smell
swads
yokes
varec
twerp
kokum
recal
roker
adown
lento
dimly
volae
tocky
thoro
rogue
sedan
shins
orfes
sammy
winch
dowle
oboes
wisps
foals
ended
voars
rance
basta
fleas
bosie
monie
favas
wasts
wilja
briar
petre
kugel
snare
suave
glode
safer
testa
ragas
chins
dozen
blues
razed
sates
basal
gleba
hiked
gofer
cymol
fisty
zatis
fests
pinup
muddy
scail
idler
hafiz
surfy
comic
chars
slope
jouks
diane
dorrs
oxter
field
ictus
rathe
kusso
decor
marks
incog
loris
paolo
tehrs
train
smeik
flues
adoze
gemma
wried
towse
plats
chape
hapus
sneck
chirm
tuktu
recce
chado
fonly
burly
anana
rumor
urial
files
grund
paste
areal
lemma
aided
preen
rondo
rosin
lyses
hejra
ledge
heths
masks
stole
using
plumy
roved
afire
laith
tumpy
belay
baler
vozhd
sithe
koura
navel
taels
flock
duxes
pommy
geist
ginch
quake
rewax
pawky
cures
negus
braxy
sanko
below
betel
copay
arrow
wield
sozin
knees
bench
ancho
reorg
sowth
spaed
absit
regal
fells
lunge
riled
stirp
hucks
siroc
hymen
crisp
rumal
erevs
hatch
haets
clows
wordy
umami
royne
hoved
genic
senas
thana
padis
luach
pwned
diazo
thews
culch
osmol
tenny
hosed
smock
leafs
thrae
ursid
beray
umpie
nonet
caged
tombs
amido
bliss
drest
margs
euros
algin
hangi
table
holes
latah
reans
upsey
sewin
welch
fordo
spate
outta
yechy
aphid
phizz
posho
snail
abele
bortz
oller
blaes
doums
huzza
sylva
oches
whirs
yexes
aptly
campi
speos
fuses
gorge
bekah
winey
finks
gurls
faker
horme
aural
akees
donut
siped
carrs
quirk
bravo
swami
crees
intis
waxes
cades
flane
cooer
balmy
cavil
solar
shark
nonis
prowl
ceria
agaze
quats
chons
raced
bunje
resin
prang
risks
cloys
snoek
uncoy
skegs
parve
eliad
skyed
yeans
brusk
crepe
burke
glean
orgic
buras
spued
clavi
smoor
ebony
cafes
helos
toshy
howes
robin
berth
volti
handy
serge
fayed
forex
surah
sibbs
reify
smith
stead
ochry
purse
scrob
ossia
missa
rises
faver
mutes
seven
undug
libri
viler
avail
knout
miked
fugue
unais
aspro
fyrds
skunk
soyas
tikas
baloo
galvo
nawab
kirns
grana
kissy
hopes
galea
manul
denim
benis
caped
folly
daych
sista
zooea
sutra
hyoid
unsod
ogler
samas
gauje
green
embus
urubu
wazoo
sawed
escar
unlaw
roods
debur
leant
wetas
fubby
mozos
butty
neral
glent
stars
nanos
hyper
emyds
ponga
picra
saids
ileac
arias
toyos
cates
roots
manes
leggy
monal
regar
prick
sowls
moves
boffs
ciggy
gopik
nutsy
bawdy
cetes
puris
liras
whits
ikats
unwit
salix
tetes
belon
nomad
chits
lithe
heaps
crapy
yowie
sudsy
board
sorns
hadal
snush
wheal
yarrs
poove
kayos
taker
sidle
pukey
babel
resty
cooky
feres
tents
almeh
senor
beads
rhody
scaup
phyle
targa
confs
burps
rived
bumpy
etnas
unlet
bialy
gypsy
cymar
mores
fumet
gamic
mizzy
telco
spoon
abbot
snaps
gaddi
orzos
waned
forum
infos
kedgy
frees
imams
kepis
spire
unarm
flash
latte
fonds
trigo
acker
dazed
roate
skeet
ephor
sacks
mezze
pareo
omens
repel
stoup
naggy
dawed
gairs
lazos
huggy
tonne
poddy
sagas
slart
skool
pedro
stoat
scalp
treys
ouija
terek
chirl
spawn
cajun
bunco
sanes
baize
bauks
warns
haugh
gybed
cysts
begum
apgar
woads
boons
bajri
hinds
whids
temes
herns
clade
slush
blist
filmy
creak
braky
privy
boing
abore
agile
coeds
casks
ramee
kilns
easer
vault
cocos
jills
dites
oppos
fetas
pinto
holon
duals
achar
cajon
lisle
sherd
maxes
biogs
scurf
cutes
growl
myopy
filly
filum
vaped
romeo
spawl
grate
knell
orbit
scars
swopt
bevvy
dalts
truss
aroha
candy
sheep
blear
lathy
peaze
daube
ginzo
sairs
lotto
sakia
specs
etuis
zizit
kukus
aunes
raged
kvass
bonks
pater
vegie
micas
belah
going
papaw
tonka
rooms
matey
zexes
parra
brios
scuft
grist
cowls
oread
palpi
minty
wreck
onned
aroid
vairs
scall
locks
ratha
sypes
touzy
roues
sexts
grimy
farms
mages
troop
sybbe
kalam
howdy
nicht
ayrie
strap
sigla
fraim
daunt
poboy
germy
roule
vouge
whisk
tippy
roums
bouts
carer
equal
hinky
hajji
topoi
picky
botas
verry
maids
prese
lusks
naunt
sents
moder
trior
quill
grime
chums
hoxed
skene
lowly
merls
debes
apart
dizen
oleic
facia
spang
borks
oribi
smeek
flory
temed
terms
vrows
boils
bogan
blins
zygon
caaed
syces
yards
elope
wenny
quite
gazed
pones
nabes
silds
pavan
havoc
halva
harms
unked
frorn
unset
tahas
plait
revie
dunny
daraf
marid
agree
fence
erhus
cunei
fleck
wages
artsy
bocci
cauls
centu
ameer
navew
gyred
abrim
goths
wains
comte
curie
kiefs
fecal
fruit
neems
yills
feuds
oidia
izars
hunky
pumps
nicks
docht
ennog
darts
walis
meter
hoyle
again
downs
rheme
tapen
feued
jimpy
cubit
arefy
fucus
shoed
opter
napoo
juicy
kandy
ravin
tushy
nanas
silen
poots
kurus
nomos
lymes
dikey
loved
aioli
bubbe
pioye
roams
pesto
timbo
carns
optic
skeer
zappy
tarsi
imari
paver
pleat
ibrik
chuse
fleam
onkus
blond
corbe
owche
feart
gulls
izard
haole
dwelt
pampa
japer
mazer
pucks
playa
orgue
debud
doomy
chays
doubt
wongi
virga
malms
limbi
suite
crura
raile
crips
porno
after
kabob
apsos
rasta
beaut
hutia
serfs
roguy
tazze
unfit
urman
arame
paras
nosed
daurs
zygal
fixed
tenor
dolts
saner
begun
azide
abaca
facta
rabic
kofta
macro
hefte
whigs
viral
waits
areae
throe
flabs
fenks
jurat
scraw
sowle
dried
stoop
agate
hable
douse
gobbi
droke
situs
burgs
tenth
thymi
doter
morph
coste
zoppo
broth
siker
dwang
quipu
oxlip
stain
botel
zooey
prigs
hoise
stipe
betta
nemas
cursi
aviso
graft
bobak
taiko
braks
aduki
serve
ketes
daily
doxed
lurry
shist
smugs
kembo
gimme
medii
wisha
enter
rynds
fonda
jesus
pains
butoh
tegus
adits
loued
ledum
oakum
roupy
flawn
drole
gleed
cyber
ledes
wries
hours
deawy
laigh
soily
ached
rocky
volet
segol
owled
avine
bodle
knelt
wroke
borde
foley
swobs
mould
rimes
punks
smaak
haint
lysin
afear
jeers
vitex
polly
jeels
firer
keros
peens
glebe
relic
cubeb
elogy
abamp
lucid
clart
shmek
wadts
gulpy
rooky
balun
onery
conia
brede
lades
tifts
kayak
scorn
bunas
skits
salto
divos
torsi
hairy
azlon
girls
marly
mutha
adder
vatic
gular
roked
vehme
arsis
leady
rigol
borak
ionic
zuppa
snibs
latus
tammy
smart
manor
llano
haggs
warty
blocs
nugae
segni
oracy
scurs
reamy
blade
mumps
brier
retem
libra
laree
begem
apted
acute
hefts
brent
wicky
primi
asura
grrrl
titer
herye
sheen
fusty
cnida
agoge
lowne
sicht
odahs
panne
gibus
gases
neese
bobas
hippo
steem
lotos
sowar
gamba
ashet
parts
final
gemot
deman
snake
urnal
shank
eaves
dancy
albas
pulks
finis
snirt
punas
paven
nohow
joust
rosts
cruds
piend
salsa
lingy
girrs
trade
stony
makos
poori
stats
tenty
faffy
jager
hoses
noise
dutch
mamma
porge
yirds
paper
raias
howls
spurs
roans
flota
ungod
tweet
fyces
krait
yamen
oxeye
fique
gadso
theft
bewet
fease
patte
tacts
craft
moses
canal
oscar
wails
allay
pyots
rhyme
await
heled
rimed
prong
manto
axone
gassy
shape
repot
trull
wipes
wedel
jerks
breem
swank
wahoo
tilak
siens
doily
sours
yomim
yowes
glugs
inion
malas
spoot
elite
coate
palps
pried
hylic
aedes
dinna
slipe
molar
paspy
reame
jafas
recti
tonga
hoars
dandy
crack
clamp
beals
hamza
imine
steen
soths
spial
talak
dryly
atria
relit
teems
elmen
prana
taata
mesic
droil
ylems
seine
wimps
front
trait
mimeo
login
borts
merer
larky
zoaea
sorra
galut
gurdy
shaps
quare
rusma
chirt
lacer
vogie
bourd
shrub
filed
hoiks
uplit
rozet
duras
koses
rawin
yucas
gully
avize
stile
calos
amirs
merks
rouse
sweat
epopt
eniac
sizel
pedis
argil
rungs
repos
soled
doffs
lycra
pyins
scapa
roomy
woons
aguti
cumin
whomp
roils
vezir
bokeh
krais
sirih
doabs
gayly
colza
boyar
wyted
lepid
emure
phang
curns
tices
glial
jeely
rupia
rimus
strim
brink
flics
thuya
mulct
potin
almud
wilga
liege
tulle
slips
campo
rusty
maser
murre
perea
jives
crame
yewen
ragus
oared
sieur
taxus
codec
troke
sager
moups
ulvas
lense
lasso
china
tulip
damme
corso
agave
pyoid
toffy
cadie
weeke
slubs
alder
thrum
kraal
maron
gloat
aimed
buffe
pitta
bolts
lassy
dowar
india
mawks
weeks
token
purrs
yippy
marah
apsis
axled
shook
heald
biers
hijab
nifes
derms
iambi
hound
jobes
byrls
idyll
skyer
odyls
idols
torta
conin
smowt
kalis
puces
eerie
uneth
kerve
chaws
writs
baulk
badge
flows
irons
shady
panto
conne
chaps
perse
tared
brank
lover
masty
vifda
plouk
gambo
scary
eikon
shewn
ealed
liger
palis
demoi
morne
caxon
gooly
heedy
paddy
newel
hedge
blimp
garni
toits
ferly
forel
kumys
twoer
mafic
weedy
demes
virtu
fujis
liter
geode
druxy
recto
puffa
paths
bobac
fared
noisy
memos
fitna
tondi
baned
rupee
noble
gadge
debit
faiks
hasks
cuzes
showy
decos
loopy
small
ymolt
gippy
blood
rhino
fugie
poulp
drips
chais
crown
booky
comer
abuse
widen
menge
odism
barra
massy
sonde
modii
gatch
berms
lushy
yarns
hones
shchi
piper
crusy
hurly
banco
staid
metol
rules
ollav
spins
hexed
gills
amain
sooey
scamp
groin
codex
estro
yelks
saheb
hissy
mikes
rotes
varus
doits
asses
sheaf
owrie
goosy
aread
tread
brith
yogin
yobby
konks
sayid
tains
carbs
knubs
ramps
ictal
skiff
rines
easle
seifs
maker
deems
begot
visto
liber
super
moues
piths
tramp
dital
lobes
caner
flops
zills
eggar
civvy
noted
calmy
colog
piccy
fouet
chads
tarts
teras
hayer
lawed
mango
jeats
newer
niter
pacos
brize
potoo
evens
among
aurum
fayre
patin
jubes
gonch
sewar
gamin
alvar
moers
frowy
risps
ravey
noria
dazes
titch
myope
shalm
oncus
morel
types
wheat
bothy
rubel
baken
bliny
tarps
sleek
mixte
courb
suede
topek
lilac
resit
nubby
eater
pomos
biota
might
boysy
angas
rozit
vises
pries
egret
weets
lurch
piton
craze
vaute
kazoo
goras
fluff
nerks
serrs
skive
rigor
chiro
dolls
imago
myall
kaons
thigh
nerds
dinos
hoser
zloty
waked
weird
wooer
getup
amnic
trays
drusy
clomp
agrin
quash
sewan
kythe
messy
fusil
dizzy
dadah
tacos
saucy
quale
gourd
venue
skran
sidas
cones
vacua
gwine
pours
apses
lurve
pawns
carle
proms
xerus
daris
intro
rukhs
dives
moble
cadge
adult
jerky
yarfa
shoot
zanja
soops
golly
wauls
khats
fadge
lated
ydrad
shaly
yikes
derat
inbox
ninny
zeins
redos
dwalm
kanae
acold
locus
faith
drank
vivda
vired
velar
cered
tiled
mecca
runny
dixie
fiber
apple
recap
judgy
sango
ileum
sitka
fuzed
ethyl
wafer
napes
hohed
boner
breds
cloak
selah
raggs
tubas
scans
monic
pilea
lenti
coves
lairs
brins
vined
mikva
dyads
goaty
capes
faked
droit
oozed
borgo
seirs
swift
milks
deity
taiga
chirp
agila
terai
greys
nerdy
moira
scuta
snubs
vague
cedes
hared
viced
stems
woods
leers
banes
talky
heeze
rello
limax
repay
durrs
kevil
cutup
chard
tolus
glees
aiver
pical
redes
spake
sease
soces
leats
fados
brims
bundt
joual
paces
drove
farro
bibes
gighe
whort
bulgy
crome
miltz
largo
hards
globi
mites
raree
crave
padle
serai
obeys
emong
ember
petty
accas
larum
haram
horns
ombre
hoxes
ourie
laxly
triol
prems
plash
ryked
frass
diked
revue
dhols
inlay
nying
dhals
tries
firry
perry
abray
shola
obols
cruft
frigs
boite
deray
merle
sered
cooch
stirk
miasm
blown
calks
gobby
zanza
choco
dayan
scaff
swags
laldy
souse
fouth
bough
elect
hooks
araba
tyred
shrew
steed
iches
rowdy
sider
blobs
tenia
lazar
clams
uhlan
sythe
brawn
bebop
orach
wryer
gecks
musty
setal
arere
fides
dowps
klang
taxis
dinks
older
highs
aloof
silty
donna
maiko
imbar
whaup
goles
pikey
binds
touts
comae
quail
nosey
routh
twals
buhrs
adyta
imshi
hakim
qursh
lycea
thees
igged
pryer
aping
snigs
pilum
haded
basen
dodgy
unity
tuber
yoker
coqui
urase
garth
abode
feint
hakes
boart
owner
binks
biros
speel
liman
yapps
plebs
expat
liane
gotta
khuds
hives
salic
brast
foule
heigh
annul
bavin
ceaze
boets
ruggy
solum
pages
cawed
fella
shall
subby
tepoy
embay
heuch
trugs
wisht
peace
brick
moyas
slaid
reddy
ponts
pilis
puree
jarps
bunny
vealy
sabin
jabot
zilas
sheas
thous
aidoi
bruin
pomes
rotal
lapis
organ
horks
refed
sayer
volte
ricks
fills
anker
hares
gaits
frost
merch
ariki
praos
rotis
devon
weeny
dufus
lined
knuts
fondu
toped
waved
rebut
baggy
pause
podgy
drows
hench
meffs
renay
agria
poupe
years
creed
bludy
cusps
niqab
indue
peart
gowns
grain
mouls
rores
zimbi
musks
fling
leads
clued
caphs
knawe
swill
hoors
lapel
osmic
sorbo
axles
kapok
gesso
tibia
scuff
grews
dingy
bedew
tondo
rizas
mungs
freed
stipa
sweys
flong
webby
murid
melba
syrah
mezzo
blank
obeli
goofy
zacks
nukes
realm
giron
gripe
picul
whish
knack
would
pyxes
penis
segue
toyed
cornu
cagot
lirot
sport
minor
brood
choke
ronts
scald
mashy
frize
jiber
poked
shiva
horah
talcy
torot
cowry
atoks
besee
tarty
doper
scrap
wacko
laths
denis
draps
shako
nanna
griff
brust
lalls
erupt
derry
tajes
animi
serks
ranis
quirt
ready
parrs
pinon
lapse
wager
heirs
turms
jacky
ouzos
ayins
cloke
snows
pease
invar
ungag
motty
arars
radii
shown
noily
splog
flump
midge
piety
nudge
piers
bound
karoo
calla
cilia
spans
netts
gowls
hokku
goris
stood
cours
kogal
tryps
locie
patly
scows
enemy
sangh
kbars
thuja
maggs
stupa
evert
plows
grize
withs
quods
yager
meets
hafts
keyed
churn
raupo
nizam
apayd
nikah
fists
brake
fluty
aecia
belts
kindy
ghaut
atoke
blitz
shoos
birse
flack
dykon
lores
spain
covin
oobit
hurls
minim
begad
shuck
basse
arena
rugal
piezo
muggy
hiems
bason
naras
galah
chair
cryer
moody
amide
polis
heame
yealm
fucks
caird
smarm
zazen
clone
yetis
crick
crass
fundi
vleis
enzym
nixie
rival
arbor
jirga
faces
ankhs
sabra
avise
tousy
beefs
lisps
opine
phase
gites
tiyin
gawsy
jomos
wryly
doggo
lyams
murra
kotos
adays
gable
gulps
worst
means
moola
thars
fezzy
roped
cawks
yirth
argon
curst
oomph
wonks
coapt
bawds
geese
bedes
dulse
signa
pilot
drugs
dault
arise
glias
grads
aflaj
coral
mimer
couch
skuas
wyled
pecky
abler
spina
ploys
sumac
sling
sagos
foxes
fiefs
lunks
skell
fiere
charm
amlas
fanga
jarks
fishy
piony
heben
saros
dited
roosa
cibol
pokey
yrapt
rappe
pacer
lipes
geres
shojo
dices
dwell
spink
hevea
lying
drunk
graip
build
scute
fames
blame
gucky
retia
dangs
fears
diffs
wadds
sited
psyop
indri
wooed
plier
fuels
slojd
magma
tapas
loups
golds
fural
sibyl
pukes
taigs
eiked
cokes
alfas
toise
chick
force
trugo
genoa
sprue
gnars
skein
aweto
modge
cross
alums
sunny
phare
surat
cutch
cower
graal
inker
donor
faros
baser
thuds
didie
muggs
ditto
khets
ribas
cowks
allow
slunk
vanda
ponzu
neals
goons
palls
rejig
tuque
ravel
cutty
towny
vials
knurl
notal
sinds
bahus
fraus
retry
tugra
crocs
halms
manas
ceres
dishy
calps
binge
cosec
hovea
tenet
gumps
phuts
keyer
fudgy
raird
whorl
offal
grump
noint
mulla
creek
lough
docus
mincy
colly
techy
blaze
sofar
dynes
tests
clegs
elpee
borms
nulla
haute
funny
satay
grade
yelms
atony
dools
gutta
paans
kills
harim
mossy
pelts
karst
raven
poxes
plods
grief
nauch
ozzie
boink
tufty
silva
vital
camis
dated
erses
kawas
foams
xenic
thegn
lacks
antsy
eclat
riots
rumps
snood
coxed
scoog
roted
dosas
barny
agons
pinky
ichor
ramis
crios
farle
trist
malis
lepta
yenta
sangs
nerol
whens
kotch
vroom
knows
gyppy
lumps
prent
orles
elude
owies
tenno
civie
fully
vivas
conic
coffs
quoin
therm
parer
gloze
marts
maces
oonts
toing
timid
oncer
hawse
miser
promo
pally
daled
tawie
cacas
early
stags
mesto
gorse
perks
trace
tails
pawer
punto
amrit
saics
jambu
emyde
elemi
hecks
delts
galas
grone
dough
moral
faint
rases
fouds
avast
gelts
gaffs
dicky
serin
witch
exits
doura
perps
adobe
inset
stopt
dials
tamis
fehme
amowt
bluey
pogge
apert
glims
nebek
meths
neifs
pohed
miter
grith
furrs
bombo
think
blude
trats
jolly
meved
since
wanze
reens
algum
pipis
champ
fresh
mebos
karns
pirns
pekin
woker
barca
letup
azine
snowk
fiscs
mangy
titan
sesey
hefty
styli
rindy
moots
crony
bubal
clean
oxime
mento
hedgy
vimen
tacan
sewer
spend
jetty
tuxes
swart
karsy
seamy
drays
empty
homme
duvet
ergos
vughy
fuddy
honds
makis
quaky
whelp
sugos
britt
groan
poley
seats
bevor
froth
drubs
boult
weber
glady
biont
botes
danio
fleer
swipe
kojis
legal
gived
eased
gibes
dorps
minds
wizen
dryer
dotal
copen
brond
sodom
logan
clops
hansa
shags
saute
wecht
scrae
tarot
hilch
laics
fiers
drack
pooch
vills
swabs
marsh
jongs
snash
chark
coaly
kiack
doucs
space
mynah
pulls
avoid
etwee
wrote
stall
scams
lunes
jomon
civet
clapt
blink
koras
irked
manic
miner
dopey
basic
pills
plasm
unite
tachs
waite
geyer
soral
crays
decry
alula
bunia
obang
close
brill
royst
duros
mache
drone
clots
nache
brigs
penny
bungs
lacey
tatou
nonas
cholo
refer
swerf
bardo
kirby
bints
layer
plumb
frack
brisk
butut
stond
alias
alike
hazer
kaiak
garre
tabla
rhyne
sudor
tusky
kench
wawls
cedis
cohen
loads
ruddy
maxed
nummy
sexes
yoops
repeg
agist
adopt
learn
lulus
meats
plong
grass
pilch
untax
chocs
speed
tamal
saist
gyoza
hallo
aredd
styte
worse
honed
weirs
roral
kyars
adrad
mamee
codes
venus
heads
zingy
baths
poler
droog
tinny
ukase
grigs
choon
hooty
ditch
emacs
audit
mungo
tings
speer
fiked
trest
dewan
pouts
uteri
pitas
faffs
goier
senes
tutor
gyved
cloff
aside
gulph
pinta
dorky
gamed
shoyu
alkie
chola
clunk
olein
flans
bawls
dowed
cards
downy
trois
pinch
kilim
janty
graph
armor
decad
timed
trine
daker
spall
bream
marka
veena
jiffs
corno
lotta
clipe
sampi
nitid
waldo
towzy
dados
linac
cauri
logic
store
draff
beths
pursy
lotsa
stern
wider
taxon
pleon
tomes
stell
texes
jenny
mirks
stulm
banak
demit
hosey
syboe
flaps
zibet
afara
suids
flank
chest
pixes
spyre
moras
raine
allel
theek
ocker
solde
villa
jasey
screw
judas
haafs
maqui
vauts
cupid
ngoma
chock
rudds
abate
wojus
croon
dread
ajuga
manky
nutso
pardi
ayres
gents
debar
ruses
lamps
nancy
haulm
darks
bilks
hythe
stage
dikes
mondo
bairn
totty
brame
swans
uraei
zests
wirra
repin
icier
overt
calid
loons
added
coyau
goory
darer
conch
dacha
musos
scowl
yodle
madly
lathe
surfs
deism
dered
skrik
yupon
wally
feoff
zoeae
fetus
niger
ensew
debby
kurre
mokis
ejido
swell
clang
carat
abysm
gamas
tires
hiker
whelm
cooly
quate
feast
choof
cushy
jacks
tilts
mamie
forms
livor
veles
prahu
sappy
sarin
wamed
fuzee
udons
lupus
dured
fibro
clads
epics
ideas
colls
cants
coxib
flirt
sleds
loofs
kelty
snogs
zoner
slebs
chizz
subha
verge
honan
pygmy
bider
acing
tolar
posed
yates
serre
rinds
compt
hoven
covey
mambo
meane
crunk
eisel
keeks
rubes
moled
floor
carls
dover
pigmy
quiet
chimp
circa
schwa
names
amuse
nadir
hents
virge
thong
zebus
tinct
petit
solah
droob
coirs
swoln
ngaio
vamps
rivel
shirt
trins
acmic
fyked
marae
cogie
rhies
zeros
ardor
slice
prism
scone
yowls
which
sayon
tymps
feods
acres
dries
teloi
lurgi
busti
pikau
cases
tinea
trump
reney
nempt
yawey
assez
bunds
minis
wites
fugle
cumec
airts
cured
beamy
naled
gleet
ticky
gomer
ahind
thowl
sculs
gride
plaid
tares
torte
dirty
xoana
cubby
verbs
leuch
hales
heyed
honks
romps
ashed
ferry
globy
radio
rants
helio
brise
briki
byres
flava
aware
hopak
dooly
boppy
relax
clung
shyer
marse
shote
recta
gliff
racon
fuffs
forme
posse
lands
genro
eevns
mirth
nidor
ruers
prays
quads
abram
puffs
bourg
idiot
axing
stive
apnea
exalt
platy
habus
pushy
flogs
ippon
typic
nicol
ruffe
fumed
xenon
alowe
sprew
dewax
tumor
astir
chawk
almas
scart
lutea
laika
sarks
lowts
heavy
tasty
ample
hairs
koppa
lures
saint
aglee
cocci
hiply
thack
kutas
souls
jugal
abrin
sired
traps
preve
rowme
stick
azurn
tyers
lysed
caple
bourn
tophi
prier
kangs
docks
zonae
almah
ecads
navar
datal
ysame
punji
jukus
gurus
nails
rowen
units
taira
porny
girth
gadid
raxes
chynd
oxide
hippy
eyrie
globs
gongs
betas
fated
kawed
pulli
auxin
bombe
birds
apoop
soddy
capot
extol
quern
feign
pagod
tying
pipas
abhor
lagan
sooky
evict
hayle
sorus
trick
elbow
lieve
skimp
begat
extra
dealt
stays
farcy
cooze
fleek
queme
drums
bumfs
lochs
expos
huias
hogen
mythi
quass
idled
edges
gates
raped
lavas
caese
porgy
immit
taunt
axmen
lippy
copra
whack
skews
trefa
jalop
filch
tripy
miffs
duomi
narky
honey
fugio
oints
yuzus
proud
chiks
aired
moner
flown
sends
buroo
sumph
taler
amber
cakes
kerry
untin
tetri
brosy
probe
amped
newed
niece
croak
rezes
skody
mixed
parvo
pseud
doona
gipon
vuggy
fizzy
tweed
krona
cowal
rekey
jelly
fares
wanle
stedd
viver
thagi
groom
humus
wrens
leany
melty
pants
knaps
odist
unkid
tribe
woful
ivied
codas
rohes
kievs
snipe
tuans
ceorl
month
halma
limpa
traik
ainee
darzi
fixit
orixa
array
vying
appay
arroz
ulama
slily
depth
broch
durst
ident
tolls
guard
abmho
goels
gynos
spays
quags
circs
abuna
peaks
smirk
bezel
vexed
wowed
guano
valid
crews
spean
leave
willy
whoso
natch
imido
bests
bluds
plane
aggri
curli
coxal
angst
speir
loran
ansae
spane
kalif
jambo
throw
dirge
bandy
toles
coifs
nitre
stere
baled
cense
bloat
expel
rinse
crime
absey
welts
ungum
glair
squaw
count
hinny
fours
xylol
voter
agene
renew
mochi
spoof
buhls
homer
cuish
gored
simba
crout
booay
poesy
ghost
veals
rings
musts
roups
rumbo
guava
cided
indie
sarky
isles
atone
aceta
valve
range
naris
deice
shuns
scums
trods
dorts
usurp
alway
chogs
syncs
hails
poind
sense
lawin
yamun
nould
wasms
polka
bwana
rudis
clept
salty
teaed
kente
adeem
alate
khaph
stomp
erose
widow
dsobo
monte
anigh
sceat
gibli
naffs
clats
devot
reata
hules
gusli
plaza
stimy
coled
swats
notch
joint
usnea
cruck
hiree
adbot
viola
onset
casts
eared
amiss
imbed
hurst
siled
hints
sepoy
kombu
humic
viner
thorn
kasme
menta
gusla
gilts
loops
palki
trads
upsee
jibes
auris
parle
kiter
elder
looed
price
synod
omovs
hided
goopy
sorts
wifey
reast
chela
armed
carom
seepy
spree
samek
nomoi
mocha
spiel
regma
houfs
feyed
belee
lolls
eskar
snaky
dream
rangs
envoy
gipsy
blart
gater
koker
glume
perce
benny
asway
cinch
balms
stean
palet
cunts
cides
filks
yacks
ceils
thing
wurst
ulzie
dower
tythe
moove
spats
loral
frays
flaks
basis
wonga
blert
wexed
sorda
heast
umphs
porer
cerge
pshaw
lakin
karks
kulas
needy
quean
barky
jewel
glaze
grisy
clout
ninth
paris
canny
bonne
jocos
vaned
netop
tichy
cooey
loped
until
boord
mooch
dying
banns
caked
loges
razes
comet
aygre
assai
aking
bewig
egads
poort
gobis
suber
gigue
weals
alone
bezzy
orant
kyack
owlet
sains
woody
whows
sewel
pinks
haply
roopy
tuath
nurdy
nazes
lynes
horsy
aback
picas
glibs
watts
virid
kauru
morts
pudor
toppy
trued
sloom
games
lazzi
macer
dwale
abase
solos
bajra
tigon
peony
scope
thebe
misch
zarfs
recut
facts
usage
waker
chank
perst
teuch
aways
buoys
sweet
coped
rolls
hance
daisy
reels
yirks
blaer
vales
cheka
sente
tools
backs
clays
vouch
unpen
lotte
soapy
glans
biled
pilao
xebec
marls
babes
gulet
stare
noggs
berme
fires
korat
unlit
corms
sumis
frape
scrod
smalm
micro
leaze
mints
virus
lairy
lunas
cymae
nduja
bromo
mires
teaks
quays
parka
slack
strow
agers
bogue
books
joist
jumby
dunno
thiol
nanua
smurs
torch
keirs
bland
grise
works
resow
meint
yoked
goyim
marle
todde
pesos
mawky
zobus
shelf
ouens
ovens
teiid
anima
minae
derns
fluor
wiggy
seron
kanas
booze
tinge
foggy
aerie
artis
psion
bafts
disco
bolds
kenos
festy
marge
natal
nirly
dense
lares
spail
vogue
redid
gigas
owned
ixora
cheth
funds
docos
zebec
chips
quist
biffs
feels
elchi
yitie
guise
toled
amour
moper
modus
simps
noxes
alifs
waded
koala
chara
arson
stake
rusts
ngati
slaty
strum
khaya
hooch
harps
wings
flask
sprad
drear
lilos
tatie
tales
rebop
taxer
ranas
skims
fiars
sizes
zupan
minge
pukas
grouf
senza
humph
derro
yawns
takis
beans
corns
riles
longs
gamma
winze
stoke
keets
marvy
wayed
byked
pansy
padma
dudes
gares
blits
taals
dared
loofa
lodes
genty
attap
lotas
podge
lours
cubes
stobs
epoch
arcos
omits
purda
drink
etyma
alaps
olive
pubis
reins
chana
besti
burrs
dooks
cable
schul
ketol
abune
frizz
gelid
sonly
gonzo
vitta
adept
tines
zaman
unfix
liens
bozos
thali
linns
tauon
toddy
canty
socko
pervo
thein
sneds
kyles
jaggs
swarf
towsy
pucan
phono
aides
heles
cines
holds
reeds
blite
piney
cento
caret
jiver
urger
syker
fiery
ethne
sures
nobby
saags
ridge
brads
meous
dhole
poovy
varan
wicca
jembe
howfs
prims
howks
bodes
awoke
holed
saman
dukka
thyme
doled
goeth
gormy
unaus
plugs
caste
flier
ludic
vaunt
mover
batta
crepy
brash
ditsy
vatus
reses
aland
cahow
sargo
craal
colin
gesse
tacky
neemb
scrat
apron
slabs
loams
myrrh
silks
twiny
ardri
scree
haled
guans
agued
cwtch
targe
peags
louse
dhuti
zerks
saves
weils
jutes
plans
bussu
berko
wents
gnarr
tolyl
acerb
minos
boomy
fubsy
jeffs
toile
acock
abyes
argue
gusts
mazed
otaku
chaco
autos
align
goral
tahrs
jasps
amino
panga
dully
indew
apaid
gynny
cyder
brows
ontic
tewel
octet
okapi
brags
stich
slate
pirog
vives
pelfs
zebra
snift
pubic
sames
lurks
tanto
mucid
derth
drier
marcs
impis
bines
ninja
bouse
myths
suete
orcin
enure
bilby
straw
grapy
hawms
tally
refly
pyros
pepsi
gaily
stuck
grant
paves
horis
imped
naevi
troat
plews
bijou
doddy
tilth
fungo
ponty
spuds
towns
hyleg
knoll
skate
toffs
abuzz
humfs
teers
bogie
blots
essay
immix
comma
diary
prexy
mills
dexie
teals
crimp
drill
axite
strag
larva
cozen
semis
sonsy
winge
chout
wised
loves
genus
fjeld
melds
yules
rices
fumes
never
ticca
ascus
stonk
remet
grope
paced
nowls
noter
tacho
gabba
wadis
gazon
dolor
chore
ament
akita
wrate
needs
meeds
jupes
sines
berry
maned
shule
cages
wanky
awash
ankle
borel
mussy
piano
chuts
savor
ticed
unapt
phlox
humid
gawky
fluid
recur
hejab
poppy
haiku
resat
plunk
usque
pawks
baste
objet
bases
wicks
unzip
zedas
steek
roofs
satai
twain
arris
polts
gaunt
gloam
ducts
ables
boors
spule
wroot
denet
sonny
discs
puddy
filos
icons
plena
maiks
crazy
gibed
pubes
sulfo
yomps
orcas
casky
conge
drouk
heard
laker
mecks
glaik
windy
glare
kiddy
rotls
sords
axiom
every
bared
gazar
gimps
veils
wrick
rared
motif
uncut
divna
amort
ousel
frise
leuds
yeses
cover
bulla
limen
dyers
motel
dahls
redub
zulus
kynds
famed
mozed
katis
gebur
scody
metes
chics
fecht
myoma
passe
fidge
shahs
diebs
ovate
gluer
fetal
peeps
offed
ocean
reink
cauld
punce
gores
echos
phish
dicts
spoke
progs
hunts
flocs
blaff
conks
gleds
flunk
mausy
urson
rubli
fiche
pures
boost
padre
pulpy
fiver
lanai
lexis
silex
share
fleme
breed
cheek
vagal
lytic
vakil
ojime
tyran
sorex
wists
upbye
metro
chefs
friar
kahal
battu
mares
quoit
heals
bleys
kaies
arils
kinds
remen
zesty
ginge
tozie
ascot
polys
tarry
spumy
pulik
clink
seans
gerne
saved
steil
brats
tways
vomer
tiddy
deans
kinks
gamey
herry
bajus
erase
piets
aesir
shakt
maund
queyn
chufa
nerve
massa
lapje
teend
seize
seyen
thanx
delly
exams
buxom
teade
sient
equip
grens
dupes
broad
sowff
panax
tabor
spark
andro
hoops
inurn
phese
diner
guest
samps
heils
tyees
crier
rarks
kopek
bizzo
yucks
wudus
bachs
neeld
pesty
sitar
tepid
braws
bolls
psoai
gobar
birch
ruled
naval
fytte
manna
typos
gambs
shoon
elide
squad
derma
quids
unman
prill
amyls
pands
breis
hunch
salle
paise
ayelp
limba
emmer
skers
sweel
soups
rouen
ferms
robes
scugs
zippy
embox
arced
knars
rorts
snead
enarm
savey
shand
tides
watch
aleph
whaps
crems
stein
gawds
jivey
sants
igloo
coyly
emote
deeps
boyos
chill
mumus
pecke
world
holly
kaury
twits
zetas
coted
haiks
appal
thete
volva
jinne
theme
hoppy
yeesh
nerts
pully
booth
gutsy
leaks
lubed
rages
taped
shirr
percs
admix
spirt
favor
hulls
lions
stour
gonia
bunts
kukri
whirr
bikie
tosas
tsade
sucky
hilus
yecch
guars
rhyta
togae
manse
baker
odium
youks
oncet
reign
juked
frati
jeons
turns
acidy
tizes
sandy
evils
yukky
pouff
uveal
tynes
hoing
inspo
forty
raits
uredo
wited
spifs
tanty
boaks
mayos
softa
shied
rones
whipt
gutty
yeast
relay
utile
coots
speld
duchy
magus
locum
jehad
whins
idles
slimy
exact
ghoul
jocky
kores
gouge
rutin
clown
smile
tauts
trema
zings
mists
alley
voice
hoggs
genal
toged
lawer
dhoti
speil
linky
ogmic
delay
kadis
bomas
sloid
grown
plotz
tutti
ducky
wrast
galop
kicky
hinge
ajiva
dorsa
sugan
tempo
sigma
hosen
seely
rebus
getas
fribs
tzars
abies
meves
hawks
fetch
yumps
bruit
spald
waugh
zorro
curry
roist
skoff
crudy
viper
ronde
uvula
malam
loden
bitou
nandu
towed
slyer
palms
ephah
trone
yauds
sores
ruana
yfere
deled
wizes
milky
raths
zoism
piker
cobza
cronk
dinge
haika
bahts
metal
suets
chunk
commy
ovoid
weels
surgy
jacal
beaty
gamps
zambo
vichy
mawns
yores
mooed
smore
miles
ogres
gouty
trove
prune
reest
break
fecit
debts
taxes
hider
rouge
daces
benty
afars
dimbo
reeks
brens
halfa
aswim
flyby
laver
sansa
narcs
goura
fifth
vinyl
frown
outgo
halts
nulls
acyls
alays
eidos
edema
bemad
rangi
tones
triff
dowry
senti
tuffe
peggy
trike
hulks
rewan
limes
gerah
zlote
breve
skort
mauri
ashen
danny
uncap
bonze
bulks
ewhow
glory
naams
patka
fesse
unfed
wonky
ulpan
scale
feaze
lazed
fools
boeps
sabha
podia
digit
subah
torii
sunks
milfs
haufs
swage
octad
tabby
humps
durum
tawts
warez
teffs
vrous
sonce
kains
cully
sware
creds
knock
peghs
ancle
faery
mumsy
ambit
hexer
koffs
nabis
defis
dobra
lengs
caves
giver
caver
abear
carex
waler
lycee
musky
homed
amins
imino
belie
nacho
eland
argol
sukuk
pends
octyl
verra
mania
visne
reman
lytes
teeth
eyots
evade
kelts
tical
nowty
gaups
proem
taper
inept
deify
sinhs
frits
dants
kaifs
rales
ozeki
smack
duces
obeah
vails
murry
sauce
frock
adore
bosky
bloke
koels
priss
unpin
haven
pines
hymns
hotty
budis
zymic
runed
fates
glaum
camas
remit
abask
sycon
butts
mamba
flaky
limos
desse
ahint
snuff
flary
sused
taupe
speat
laevo
aleft
touch
rowed
alarm
girns
oater
boxla
slain
gally
cymas
moong
clift
waltz
annat
jamon
forky
wived
arets
tiers
gluon
tucks
bagel
pudgy
voces
snits
capul
maven
rownd
goose
deign
grein
ackee
dungy
retro
birth
secco
manga
kohls
flyer
tubae
unpay
atlas
baurs
mixup
ureic
ragee
proke
ernes
setae
panko
vapes
menad
cirls
offie
grind
sulfa
orpin
aegis
colic
hinau
bunya
pulas
beano
socle
scath
biter
trope
pugil
bifid
siver
toper
ostia
spams
melon
hongs
eagre
yacca
ambos
algas
overs
focal
attar
elver
dreer
serra
stroy
duets
hells
beaks
bhoot
ahing
hates
roset
froze
lapin
mauts
obits
gyans
nopal
focus
bazoo
dozes
argus
kight
flits
rides
smerk
tratt
admit
loamy
bevue
nyssa
pyats
naric
auric
gerle
plink
track
cecum
dwine
dicks
clogs
batty
socas
phony
loast
raggy
titup
newts
duper
piked
aport
prief
modem
leafy
folio
stong
sposh
shaft
medic
tenne
vegas
snyes
shope
drool
poilu
twang
novas
nighs
edile
brees
neats
solon
arete
redux
douce
ruing
volts
ammon
sheel
sizar
herls
teams
rache
deils
scaly
chica
thang
slaps
arvee
renig
rosit
mothy
seres
treen
spasm
runes
erics
pance
canto
lipid
ixias
model
katas
tacit
daddy
toads
bezil
dents
lemur
lowes
irate
baldy
ogeed
tench
ports
buffy
tithe
veiny
frank
hooey
bovid
tonus
irade
jumar
shtum
chimb
scuds
perts
mvule
hesps
laxed
lease
bight
rayne
vicar
jirre
sunna
hasps
deers
blook
stack
tulpa
lumas
sixte
goats
nabla
patty
dzhos
pions
missy
fiqhs
lovie
dunks
agood
refry
carta
burls
janny
ledgy
puffy
doted
peels
cruse
canoe
tatus
pokes
awmry
nides
cozie
namma
owres
satem
sabir
sados
ruffs
pibal
toast
celeb
goony
femur
kitty
plack
eensy
ariel
peals
cargo
yipes
preif
knits
cloam
segos
theow
datum
galax
nolls
lyssa
roman
yawed
kyloe
knosp
zippo
oriel
kidge
gawks
coups
biner
smorg
pelon
skens
amici
olden
aquas
flirs
wools
roust
skirt
toted
emeus
kiley
hoghs
flood
daric
cripe
gools
nimbi
stude
lobos
hizen
gonof
sylph
outdo
sepia
yales
raves
bundy
mourn
unsay
quyte
lotah
viand
scoop
dreks
human
bilbo
aidas
chang
taxed
kubie
culex
grame
punch
bakes
trans
jalap
toked
couth
cribs
scuzz
hanch
thumb
touze
naira
narks
taros
wedgy
kitul
djinn
chalk
morns
oasis
rains
scrub
toner
dawks
stirs
obied
sixty
hynde
pagri
swing
boyfs
jowar
sotol
sehri
flout
pasha
asker
stela
briny
sands
barks
earns
steer
heugh
recit
cache
holms
wussy
craig
lowry
doors
dawen
sough
lopes
reges
baton
gilds
refix
luted
flews
salps
lanes
mylar
hemin
lanas
monos
axels
ordos
binal
scaws
taits
ickle
chive
liven
tweak
rifer
sield
laari
aruhe
bawns
quart
rubus
joked
lever
creel
lests
doved
bells
gemel
wraps
style
bukes
aloed
nurls
alkyl
asked
bract
zowie
socks
nards
kipes
whips
plaas
large
waney
cuppa
skint
eyres
biker
shear
earnt
cubic
swail
plesh
nones
woofs
brogs
rangy
stire
togue
saree
buffi
jedis
barbs
barro
apeek
hebes
freon
dimes
bocks
cleep
sleys
mulls
malwa
taces
cosed
thema
hilts
druid
schmo
botty
washy
vulva
siles
fitts
eosin
tenge
trogs
deads
gussy
boong
skirr
turnt
fixer
tophs
seric
ditzy
fichu
their
dulls
niefs
mixer
tubed
relie
mimic
union
winns
pulps
guide
hoist
finny
lamia
hulky
tupik
joyed
wispy
yield
staws
dildo
jujus
certy
awned
sayst
urari
tided
triac
bitty
laxes
koaps
geoid
omber
casas
being
altho
lured
linen
keeps
knife
bonny
brane
ettle
droop
built
vases
curer
wilts
luxes
timps
posts
vulgo
hades
hiver
vibex
basij
kerfs
trons
advew
roshi
ogees
cluey
flake
finca
cavas
raids
darns
yechs
khaki
okras
moths
gunge
talon
moxie
motts
jumps
biles
condo
uptak
brown
alamo
corey
borty
chyme
suses
barbe
pogey
elven
porch
scats
ethic
wears
bibbs
joeys
check
vendu
foils
milor
karzy
meris
zante
umble
lofty
stope
epris
cesse
whear
whyda
proxy
bowed
quayd
kheda
pappy
jougs
carks
plant
biome
peavy
wades
oaten
mouth
samba
kimbo
inure
dooce
upran
kayle
ferer
doses
ronte
smoky
braza
goary
vinca
burro
doseh
incle
hanks
yogee
pocky
arepa
reach
pelta
lyart
ngwee
comix
impot
furzy
swine
toned
amban
users
hings
crare
busky
soras
urine
kaids
pinot
derig
lumpy
dowie
mimsy
mapau
wushu
amply
doges
buzzy
skeen
opium
basto
meath
achoo
rummy
zonal
mavie
taste
jocko
dowls
moans
golem
aeons
misty
gramp
yages
exons
withe
pelma
creps
hoied
wacky
pents
futon
gaucy
earth
bruts
rajah
predy
legge
peare
sohur
study
rubai
dures
snars
palas
tangi
oiled
ligge
mihas
bokes
dusty
soupy
pakka
gulfy
ritzy
gummi
drome
poxed
sikas
abeam
pipit
gnawn
sweep
ngana
sowfs
totes
nonyl
emmet
ziffs
dumky
three
buiks
rishi
arras
bursa
benne
razer
dreys
ruble
capiz
educe
yokel
sirup
veery
pates
resto
tavah
bowrs
kells
stogy
keeve
mends
ludes
puler
jests
smalt
salmi
iller
curbs
arcus
azote
adios
novum
major
arbas
caper
sagum
mardy
lahar
clote
pulse
emics
tepal
ziram
psoas
bales
ghyll
hight
unjam
kraft
agami
choky
sowne
oubit
gasps
fused
ceiba
crues
franc
calls
plain
caeca
raved
gadis
basti
antis
sones
elops
perch
vices
pheer
young
glitz
doody
stums
resay
bowet
legit
pulis
knarl
loose
ylike
sabot
leary
bugle
folds
unled
elate
campy
mokos
kudus
madge
mayor
tired
blued
comas
racks
kaphs
false
bathe
value
cauda
chirk
issue
rille
vodka
fents
deave
ronin
longe
teins
hudud
towel
coign
thirl
jingo
mucus
riyal
quina
domal
stash
flora
powny
preop
bluff
basts
bivia
crane
raffs
styes
stink
squid
dumka
brays
place
wauks
mowas
beres
acrid
saiga
sysop
gonys
mongo
calve
vitro
first
egged
micky
denay
roach
vells
mitch
gammy
films
isbas
berob
choom
muton
freet
layed
stork
awing
heapy
south
brews
fient
yahoo
ratoo
vakas
zimbs
piani
fault
yacka
blest
worts
munga
oldie
leccy
kohen
olpes
sijos
peery
ahigh
meynt
neuks
knobs
retie
smoko
bants
fends
teind
sechs
toots
aitus
gauss
abcee
primp
pricy
vegos
crate
slive
roger
arnas
depot
niner
pikis
wagon
boxen
roric
rowts
naiad
brush
trend
bigae
sakes
perns
sture
wexes
prone
goner
krewe
given
bahut
crude
unary
neums
rands
necks
parge
sodic
daiko
tewed
ethal
ottos
scarp
coria
swirl
oupas
boots
diota
where
matlo
dipso
leapt
atoll
lovey
feuar
segar
unget
luger
pured
preps
pilaf
pipal
tough
teary
noops
cacky
porta
nodus
shunt
scape
stend
fiats
forks
jaunt
rumpo
chack
negro
defog
cloth
osier
worms
glade
opens
frate
maire
boeuf
wrawl
stonn
odors
vires
caneh
quena
volar
zakat
badly
goban
trigs
kiore
brass
zombi
turks
gyrus
pupus
barre
powre
retch
rumpy
melik
skins
goofs
diwan
tuyer
vents
abort
throb
crool
kiddo
pikas
nocks
stoep
maybe
fulls
duple
kiaat
dormy
rhime
avows
kondo
coles
limbo
pyxie
barmy
zurfs
uncia
bolar
ficin
lamed
cried
benga
blatt
chuck
wants
inkle
cadgy
gumma
sprod
bambi
seeld
askos
decoy
flail
error
gyals
nonce
ching
leeks
basks
hurry
doorn
ileal
slows
pluto
omlah
lucky
bosun
devas
paedo
shack
fluyt
debag
leach
sadis
savvy
alcid
butyl
litre
spume
tears
clour
cavie
opahs
scene
abord
cesti
heels
firks
imaum
nenes
kiang
refit
fidos
reaps
acari
cream
coley
dirke
moray
furth
whist
skear
dobla
muons
somas
onces
dukas
hemic
cebid
kolos
pewit
valet
turfs
dores
piped
gotch
times
bhais
opted
winna
quant
aigas
keels
farce
cuffo
vison
jeton
cruel
fined
urban
anele
cezve
huffs
gyros
fiord
milty
paten
wills
dalis
longa
soler
croze
klieg
clems
often
waken
truck
barns
lozen
sauna
bices
brung
torse
spale
doree
seeks
hoyas
doser
genua
snots
faxed
krabs
mayan
poets
stove
spaer
nevus
mooly
liang
jesse
plies
felty
fains
suits
parki
dorms
mense
knurr
yabby
capas
katti
kerma
mzees
coble
yokul
sessa
praam
pagle
soldo
lames
kawau
foins
fykes
porin
ootid
bhuna
libel
texts
retag
bossy
junto
hoast
kenaf
chows
clerk
fogle
miaow
elves
dicty
tends
oasts
reset
clave
yoghs
chime
typed
mikra
gaudy
curve
lipos
idyls
maxim
piece
owing
redly
nisei
prees
gruel
shuls
aunty
epode
stows
irone
spoor
silky
eldin
trips
pirls
pence
etics
feces
fader
avgas
panty
jatos
quark
nevel
hexes
lemon
fayne
bawrs
roofy
hobos
moggy
snook
malax
geats
bandh
hikes
jaded
busby
menus
popsy
grege
genet
baron
tract
clank
tardo
droid
outed
oxers
hylas
carol
axial
oyers
tynde
match
welsh
verso
mahua
clype
heres
yawls
doozy
rainy
duppy
veldt
velum
hayey
altos
craic
deets
ebons
unhip
jigot
mosks
lanks
wires
glute
sarod
balsa
hence
baith
showd
rally
pooka
slank
grice
lowns
shool
wetly
woold
sakis
harry
clast
junco
weros
dumbs
tsubo
combo
rimer
tanga
loppy
amate
adhan
whios
khans
power
whole
eyrir
nomes
slype
fract
doats
brugh
hoick
gyppo
welke
odour
anglo
exist
devis
unbar
turfy
jukes
ogive
cella
choli
fango
ummed
yrent
tonks
piert
banya
stang
corgi
drabs
blunt
thorp
dural
conga
offer
agism
vapid
zinky
salep
commo
archi
enows
aster
meare
mercy
moods
renne
adunc
wocks
blunk
yeves
pocks
kyats
worry
sahib
litai
shans
tabun
minny
soote
flair
russe
tempi
whose
uveas
ouphe
racer
whale
iliac
looey
lohan
foray
cloop
aloud
venin
shawn
tuart
crest
taras
sials
quits
gonif
ganef
canso
races
kaims
macaw
panda
molal
grody
avian
malmy
penks
apply
vampy
muses
tonal
dunsh
tasar
shoal
acton
mauve
churr
golfs
henny
adaws
twaes
husky
wefte
defat
cords
loach
pirai
cries
laity
losen
lidar
hoyed
hexyl
tabes
naked
senna
kippa
bodhi
maaed
nerka
matte
dusts
arpen
sauts
emery
undam
jaxie
rooks
perog
rioja
widdy
momma
otary
yodel
vades
addax
wanly
giddy
whets
juvie
pungs
named
siris
horse
fatty
tikka
spell
aggro
fogey
trabs
wheys
druse
beton
melas
alane
tyler
platt
grift
treck
welly
lofts
spyal
hokes
acids
calix
atomy
knots
wrung
mease
sabed
stoai
kyrie
maise
crons
spine
pasta
korma
pokie
sebum
foehn
beefy
mopsy
netes
coypu
rover
drive
smaze
skimo
paxes
sowms
liver
rerig
sipes
blabs
beams
happi
jagas
loord
daven
snack
nooit
coils
kiosk
repla
acmes
tawed
damps
those
satyr
genes
brans
basso
penes
suhur
grave
warms
tosed
klett
demon
woken
bally
redan
pulao
gamut
oorie
lobus
coala
bides
towie
mosso
lyted
lound
pawaw
snool
erbia
sordo
tatts
yucch
money
oohed
swink
skeps
hacks
peaky
powin
tipsy
riant
satin
feeze
mobie
tunic
safed
aheap
herse
gonna
narco
terne
taish
hyped
basan
crags
furol
sauba
pippy
semen
styme
ering
mirex
sheva
whift
bleep
sinus
gyeld
myoid
bluer
haves
gambe
preed
warre
wadge
prats
blips
unwed
skags
wrong
filth
knurs
ainga
raiks
bedye
ronne
butch
biffy
peles
lings
cause
ephod
chews
mirza
jugum
tooth
lorry
moile
woofy
gorms
vivat
bumbo
blend
bania
dozed
rayah
ovist
actin
emend
bleed
smogs
bunjy
spots
firth
drice
plate
pauls
manly
sabal
reave
costs
eorls
pears
coofs
prost
femmy
jells
roses
bongo
varix
ceric
lunar
gismo
boric
kelep
vexes
hides
niton
lamby
media
spivs
sewed
zerda
krubi
hosel
nooks
blase
fecks
inlet
snabs
ebbed
aiyee
ahuru
meiny
boxed
poles
nahal
muzzy
pervs
bated
lammy
harts
barer
pavid
grams
vanes
ohmic
cetyl
dears
spews
sored
arear
clasp
godly
toges
twyer
yurta
thelf
voips
chute
miggs
yeahs
vagus
argot
hypos
parky
dross
halon
sissy
avant
talma
cleft
hurds
ycond
rails
klick
mobby
cogon
septa
smelt
glops
tardy
ornis
esker
woosh
gears
husks
diols
ridic
sikes
aught
leaps
heros
olent
bigha
disks
inwit
packs
jiaos
chide
ybore
fever
wiper
steam
symar
ramal
dirks
strut
koori
pross
there
gauds
etats
event
barye
jinni
gaums
kamik
shawl
zincs
potch
title
scrum
nonny
sades
kotow
ablow
slime
ruler
wases
miche
setts
yuked
scrim
rivet
curfs
imshy
brits
iroko
tours
teens
navvy
chott
flued
ogled
skyrs
bapus
esile
folky
mased
saxes
serer
luser
carts
lieus
glyph
boral
oinks
fanny
shade
visit
quips
kurta
halos
inned
kicks
snaws
simar
hoped
dicer
stear
stone
ganev
dreck
fauna
sieth
prawn
gojis
hokas
breys
thick
syphs
forze
pluff
colon
belga
valor
picot
smite
ogams
jarta
threw
zines
dived
doxes
waled
oflag
nappe
thale
losel
toons
lusty
dhikr
ashes
zoeas
goals
leeps
tyned
frond
goafs
lavra
patsy
enurn
etage
occur
nunny
tsadi
kibes
meril
punny
slags
posit
gawcy
kapas
guiro
pared
whoop
ovolo
vitae
defer
combi
limas
umiac
sunup
choux
palea
infix
curia
votes
terts
hulas
wanks
caddy
caups
billy
gleek
yobbo
whiss
drail
busks
dints
talpa
forza
nihil
hames
laser
goety
crewe
nakfa
belar
gnome
topee
gulfs
fitly
quire
goest
malar
slats
desks
slier
outby
riley
react
manat
iliad
shire
cukes
frame
papes
bassi
douts
misos
aargh
lefte
gavot
cuter
aloft
lance
gloop
quest
pruta
risus
wound
furls
gilpy
gravs
scuts
rebec
broos
refis
palay
typps
bless
holts
koans
tacet
spues
fines
denes
meins
slosh
fugal
usury
cisco
bizzy
dervs
arede
ponds
phoca
mohua
tungs
vireo
pests
quoth
tiyns
domes
hithe
korus
music
bears
cores
pairs
hived
cager
kerel
praty
gives
stair
yites
ficos
doula
jowls
mesas
bluet
foxed
rotch
auger
gosse
glace
rated
ayaya
exeme
shoer
tuina
antar
umras
adzed
route
yorps
norks
woozy
dorty
pryse
revet
yogas
kelly
fancy
cylix
mechs
keeno
whiny
parks
arrah
setup
turbo
signs
ferns
troad
touks
tonic
accoy
remix
celts
seral
yapok
syens
shill
twats
taroc
coked
calif
booai
xylic
usual
woxen
stept
trayf
blogs
kytes
moped
rills
peize
label
rarer
tulsi
adobo
bimah
narre
mazey
pujah
stagy
mopus
loxes
weans
aglus
busts
synds
vauch
mynas
fraps
spaes
bogus
baals
clonk
sapor
strew
hasta
poohs
honky
novae
sided
poynt
nisse
qajaq
allee
tamin
ocrea
jokol
debut
comps
tepas
bunce
adzes
yampy
barms
sniff
anear
pacha
soaks
troll
kluge
typal
grins
sarus
roles
cives
vughs
trild
slish
japan
corks
wokka
gloms
boras
moxas
satis
mucor
natty
jaffa
pling
harem
krone
talas
zinke
wawes
adust
swies
eloin
sucre
fount
dimps
amigo
ruths
wines
artic
gulch
poofy
erode
derby
nippy
rawly
aband
letch
cohab
tazza
sneap
azons
selle
sumps
souts
dunam
sulci
clock
sixer
dingo
attic
sloop
fauns
slots
fifer
caput
rurps
xerox
rebel
coyer
forbs
fiend
scoug
riser
snuck
pheon
linty
lodge
skeds
ochre
ships
bards
molas
gecko
clove
wrapt
nertz
theca
corer
tiles
sanga
grese
noddy
sykes
bosks
talcs
anlas
sirra
kilps
shove
kivas
mythy
fowls
nelis
thaws
kinda
becap
adman
tacks
azans
cepes
logoi
penal
suent
cleik
weeps
yarco
kerns
panel
prods
oping
known
globe
glits
chace
tango
patch
booty
forts
mauls
corny
clods
inust
dales
tilly
gopak
salon
vaper
wigga
bydes
boohs
suras
regur
spard
melee
cakey
laird
nucha
crudo
stane
geeks
dwile
yrneh
stray
brogh
cutto
uptie
whelk
immew
nyala
snoot
donny
laris
suing
milpa
askoi
nikab
strak
teach
wides
solei
fuzzy
tills
premy
moste
canid
fands
rieve
scudo
glift
laded
hawed
monde
sinky
gauge
appuy
shits
talus
color
kelps
lotic
lyase
neeze
wifty
loafs
kites
emeer
prime
grego
eales
pekan
sight
miffy
lownd
reads
conto
sized
katal
spelt
fugly
chiru
dolly
diyas
midgy
furan
coach
hydro
plebe
capri
waxen
pulmo
sauch
rahed
larch
anils
weens
hyson
furry
diver
welds
saugh
vexer
cough
trona
tatar
shots
hilly
along
acers
sedes
scarf
twink
croft
tamps
buchu
aspie
dexes
yowza
slyly
fluey
terry
flamy
motet
nouls
vocab
dogie
punty
skatt
yonks
acorn
okays
locos
bedel
dilli
deshi
wifie
munis
mucro
drupe
holla
frush
tomia
gazer
hears
uncus
plush
esnes
lines
faddy
unbid
wharf
acros
dilly
mhorr
amaut
putts
pagan
quops
words
fenny
chico
snobs
howre
muted
fillo
manet
whaur
gaped
ghest
nates
azoic
lousy
chart
brods
geeps
vangs
shish
dunce
uraos
warps
chugs
lipin
swits
toeas
tapus
sprit
pluot
whiff
hauls
vraic
jaker
scuse
glint
sokah
savin
slued
sakti
geare
carbo
crowd
stoun
peyse
whups
linum
monks
ampul
skiey
hewer
about
nouny
lolly
uplay
rifte
suint
veins
lyres
gogos
ortho
blurt
edify
telic
aurei
graff
boats
poule
clepe
rudas
obese
dance
leres
shuln
eagle
edict
notes
omasa
remap
chasm
mules
swees
slams
latex
axion
podex
roops
dowts
sumos
dills
macho
party
flare
caffs
craws
vaxes
ducat
pukka
links
toros
sully
milts
meuse
duits
tumid
voddy
voxel
boney
plots
rokes
lweis
mengs
fawny
burry
sprag
janes
rowan
muley
sloyd
sards
bowat
musca
certs
poach
nacre
teles
burst
kirks
sleer
erugo
habit
oktas
hewed
video
fauts
liana
wands
pawas
maneb
twixt
rests
grove
sulus
morro
stime
cuspy
urdee
puled
cagey
weete
gusto
canes
gains
stamp
chota
kufis
poses
pombe
slick
snags
posey
geans
fowth
meith
kembs
mysid
aumil
coins
potts
torts
sulks
wanna
leugh
lurid
reefs
sheer
thans
diram
bigot
briss
jived
loave
atman
mowra
tutee
risky
ctene
urare
pujas
fanks
temps
segno
shent
crust
amias
zinco
empts
nests
lobby
group
dusks
vowed
mayst
tangs
glike
motus
rhine
dubbo
eaten
weems
khafs
primo
drags
toran
terra
isled
airns
azyme
spits
bever
pacts
seals
right
nkosi
freak
unbed
oozes
durry
fezes
pekes
doped
gawps
tarns
peins
jural
hamba
diene
sedgy
skyre
lipas
wheel
beast
yojan
rooty
arsed
tyiyn
umbos
stumm
grike
proin
recon
euked
byssi
buret
pithy
anata
rivas
terfe
areic
yarak
choil
linga
jewie
choir
pacta
rates
femal
coarb
jolls
gland
titis
nappa
jerry
pongy
howbe
ylkes
swims
varas
cliff
lords
wedge
summa
gurry
beats
chook
boxty
affix
bungy
diced
varia
redip
luges
jaaps
randy
degus
rakee
lemed
sured
crwth
ewers
geeky
tripe
ureas
newly
jemmy
hatha
munch
stint
logos
plead
cults
binit
casus
menes
didos
acred
agmas
epact
labor
clach
rajes
bents
mairs
breer
voles
susus
goyle
edged
salad
pusle
grays
conky
zanze
stubs
hokis
vests
seaze
smoke
flags
chuff
xenia
funky
loath
sleet
boles
herbs
glove
reive
raver
frons
doing
pride
parae
toxic
bunty
catty
flite
zhomo
takin
bacco
parti
maist
quaff
furze
stade
evoke
wiped
envoi
leone
lilts
azido
schav
rueda
moyls
balky
aulas
gyres
torrs
bites
hudna
sooks
flaws
vants
lingo
tophe
pynes
reoil
moons
skivy
stots
scots
decan
dobby
amids
julep
dares
borer
jeans
kinin
waver
semee
doves
eques
unsew
biggy
shout
codon
risen
bowel
quims
gorsy
kutch
gurge
sensi
podal
ladle
braze
prial
bhels
porns
hongi
weave
saola
antas
pings
dunes
krang
ousts
soots
cains
mower
nitro
paned
fungs
polyp
cheap
kiths
snout
munts
rebbe
ovule
atigi
angry
supra
infra
mudir
peats
dekes
leger
tapes
durns
print
spiny
kemps
anent
taffy
buran
ranch
lasts
butes
tofts
spore
ganch
crush
polio
mayas
kappa
golpe
degum
klong
miaou
ooses
cairn
trout
morat
orlop
milia
flaxy
butle
vivid
larks
nappy
pucka
pecks
brain
gault
quonk
gnash
wolve
yucko
prate
knive
chine
looms
bicep
piggy
eases
zamia
pupil
anted
tinks
alkyd
pomps
ficus
deedy
walls
norms
scold
deair
tinds
zooks
riper
malik
wyles
upter
rowel
alert
stoss
malty
chemo
flute
bongs
robed
moppy
buffa
lader
swore
mucin
sorta
auras
woopy
korai
aquae
soave
beses
cobra
liker
geits
womyn
gripy
amene
chivs
fryer
ovels
ganja
motes
daman
abaka
guids
rahui
salpa
swapt
purer
kheth
lowed
guffs
rehab
flype
whine
tanhs
slaes
kinas
kexes
atilt
dovie
smaik
avion
yince
tenue
otter
girts
saned
least
foots
delft
claim
slink
aline
vibes
dekko
arnut
mouse
spilt
tecta
nowed
tozes
recks
rotte
nares
noups
cleck
talaq
spaws
layin
mulch
ulmin
cress
mewed
maror
exult
jaspe
ictic
vexil
seity
ghees
rapes
mealy
vigia
repps
twilt
crims
perky
masas
eughs
resaw
apods
dicot
unmet
eathe
vints
scour
liers
yerds
wolfs
brach
escot
shiso
reked
rumba
welks
ogles
coure
fille
telae
surly
honda
divis
sties
proto
blare
luffa
muras
halal
lazzo
feebs
cocks
rerun
faine
coney
flawy
lehua
pivot
urali
abash
conte
blive
baits
holey
pouke
paisa
tuned
garms
minas
reeky
bunch
mopes
prads
sajou
chimo
scapi
duett
bores
bobol
swizz
yedes
mawed
coupe
lunts
tagma
ditty
deres
sieve
bhang
ogham
quine
mojos
lobar
louma
boabs
magot
dabba
korun
stops
yours
udals
tiars
pedes
cluck
aspen
pouty
favel
tsuba
wacks
niche
devel
skats
laves
flush
nabob
enact
homes
kopje
riven
wynns
veeps
ditas
gunky
riata
hoper
gazal
exine
kecks
glary
kapus
pissy
drony
stump
roars
foyne
fifes
jilts
sarge
lowan
twerk
galls
mokes
loots
aeros
puggy
sprug
urned
tiara
vocal
sepal
bused
redds
dinky
snath
iodin
daffy
godso
hotel
photo
sobas
lossy
happy
anger
cardi
scare
hikoi
spacy
trees
bread
curny
fasti
pilae
awato
neath
meses
sheet
masts
aboon
crept
klutz
tames
ohias
goody
brief
sorer
umbel
algor
bided
wolds
lards
burse
climb
taxol
padri
wombs
steys
ratch
kynde
coady
bloom
toady
sices
topos
braai
lezes
hunks
roads
putty
pearl
gangs
knowe
huger
kutus
sides
blurb
lavvy
rajas
award
dript
nuder
incel
march
knead
thrip
disci
bendy
bulse
samey
stilb
shred
voled
kazis
keefs
doups
gurns
sloes
dholl
haems
cruve
foody
lauds
paire
aimer
loric
shake
theed
ksars
chyle
heron
carap
jinks
rammy
shale
capex
dungs
bemas
dumas
flour
slits
bonie
leets
arene
raker
deaws
hazan
sluit
leves
whews
zoons
lills
iglus
renal
aulic
fetes
ropes
pikes
crake
azyms
scion
rodes
oaked
jocks
duffs
lezza
effed
newbs
shalt
divas
tharm
grued
machs
jagir
unsex
views
swigs
limps
azury
zaxes
fundy
lints
broom
ducks
frail
hoofs
salol
bubby
kails
tules
sexer
okehs
braid
deked
khors
frist
bosom
afore
whoot
parry
styre
gyves
blows
brock
burgh
purge
bimbo
heder
yaffs
hijra
gugas
erica
gandy
lotes
execs
gruff
lomas
cions
lusus
waged
noris
louts
runty
lears
metis
taxor
yufts
alibi
nuddy
jambe
seles
bogey
vibey
upset
momes
helix
quick
sadza
peece
filmi
flick
bouns
areas
triad
skelf
beaus
mahoe
rotos
typto
donas
exert
kesar
sakai
yoofs
bufty
wingy
blype
nitty
dress
torso
knaur
vertu
beret
kabar
sinks
hocks
sonne
fifis
resid
rybat
hotch
sadhu
techs
ilium
duing
paals
thunk
pales
afoul
ramin
paved
wilds
ugged
morra
munge
farls
stoor
umpty
redry
gudes
burbs
wheen
penna
hilum
jolty
dozer
kithe
tarre
orate
stilt
tokay
nicer
jours
eyers
unket
court
favus
lirks
huffy
twine
kiwis
maple
scads
bacha
drant
guile
sambo
kevel
lahal
gager
peppy
truth
sloan
level
toric
nebel
yagis
reiks
skyey
items
ranga
hazel
sucks
wiser
fatal
vinas
airer
tried
jodel
babus
cobia
pecan
inked
squab
ritts
amens
slide
scala
coxae
crost
allyl
titty
leaky
mater
zoist
drama
unify
rasps
bergs
pauas
gayal
mated
chevy
evite
teggs
fried
typey
soken
cohoe
larnt
enorm
baboo
deles
basin
pitch
ataxy
antre
turps
unsaw
powns
appro
lotus
antae
makes
tronk
squib
chals
supes
iotas
nixer
snugs
vegan
dixit
leear
ugali
caulk
adapt
scatt
draco
teils
mazut
fanon
saker
peres
murva
bates
sunis
wigan
desis
rased
bleak
kinky
salue
pated
varve
wavey
arret
noahs
input
thilk
vinos
ixtle
pyric
yexed
trems
amove
nutty
coded
delta
prink
bocca
mesel
sella
quasi
vigil
seeds
tiffs
polks
swelt
shock
shets
wiled
cames
bitts
squiz
finer
canns
wifes
obias
stunt
actor
nimbs
fards
hoves
brava
flaff
pyran
jawan
sowps
oxies
issei
pacas
guana
cozey
voids
bring
bagie
memes
spods
shirs
wolly
sleep
gisms
soole
ulema
bonds
boree
crans
saddo
shell
boded
laved
ceroc
crash
allis
ought
treat
kaika
mucho
poeps
muxes
eight
zincy
forby
frisk
whump
diact
blume
ither
poise
dolia
based
inner
pooja
indol
akela
slugs
frosh
cabas
beers
whity
psoae
kendo
ikans
jello
doyly
cooms
yawny
lunet
gusty
boyau
equid
exing
polos
gales
curdy
soldi
chief
yeuks
magic
runch
rumen
dorse
pells
duels
blimy
rewth
takky
hoked
mauzy
brose
gnows
pavis
dohyo
tores
bulls
amice
mirky
hakea
akkas
blams
endue
hiois
oiler
jisms
banks
pepos
mavin
novel
petri
awave
cauks
sizer
gizmo
perms
batik
vodou
admin
boche
lichi
robot
bevel
rares
pashm
amahs
cotan
hough
vigor
finds
hygge
waist
scran
pzazz
takhi
swoon
quack
ligan
zineb
sutta
pawed
ponce
elvan
ethos
spank
lurer
hyles
tupek
glues
bimas
emirs
swede
debye
laksa
norma
duans
macle
dagos
biach
mizen
hying
koine
shere
roves
silly
leirs
intel
buffs
bakra
reede
kaval
retax
hovel
shlub
wring
reefy
agast
mujik
blash
ounce
reals
tooms
kokam
toker
egmas
tasse
beaux
lased
numen
yiked
kulak
oaken
paska
cuits
tubal
igapo
brere
japes
pratt
cuifs
flims
midst
islet
lered
finch
anomy
arsey
kuzus
orlon
mousy
sneer
claps
sadhe
barfs
kuias
jewed
readd
piing
could
wanty
tenon
wight
soyle
urite
soaps
stymy
porky
swith
luces
omrah
steak
agone
isnae
nanny
dulce
inarm
ollie
cozed
maill
ricer
liken
round
ketch
gobos
shawm
scrab
ursae
foods
river
repro
apres
civic
rowth
wowee
samen
leams
razor
cissy
nurds
naeve
trios
judos
tranq
troth
flyte
visie
sales
tsked
pumas
aldol
bulge
borna
acais
unsee
ludos
ratos
unlay
locis
wakas
bones
unmew
burqa
sprog
state
virls
clash
curat
houri
cires
torsk
shris
thrid
scoff
flosh
sluse
mawrs
hahas
doyen
boobs
aglet
meant
chere
woman
slurs
purpy
honer
siege
gamme
shift
truer
ropey
alist
agape
plonk
pleas
surer
frory
nagas
filet
pudge
khoum
spiry
tirrs
dimer
croup
dules
odeon
shoes
imide
emmew
ceder
bitos
loids
ofays
dwaum
wrist
mocks
ciels
icers
voila
bible
balas
phone
nudes
vrouw
imids
juves
haunt
incur
saick
whoof
ripen
tells
dorks
shush
pyres
krays
sorel
merry
sidha
sears
braes
gobbo
melic
yarer
douma
namus
drams
shirk
tendu
cloud
wives
faugh
drown
credo
melts
pules
zabra
dippy
farad
cling
xrays
fetid
nodes
flexi
douks
pized
eaned
umped
cloot
darga
clues
chiao
bunko
sperm
kacks
gules
demur
shiai
bumps
carse
pixel
anoas
wreak
infer
helms
speak
ormer
swept
cuvee
fusel
sinew
caber
naped
bogle
touns
curly
obole
bancs
clits
ihram
heath
jakey
crypt
raita
deter
cared
velds
mutch
skull
hoons
shorl
rawns
pangs
aight
veily
fossa
lutes
spurn
horas
jerid
bousy
hazes
tilde
succi
sudds
stank
panic
giros
demos
poppa
donah
culms
musse
wuddy
tweep
mohos
lexes
ghats
abbey
colas
sojus
cutin
shaky
mezes
bonce
twist
mined
soyuz
mesal
kaneh
buteo
anura
mulga
fritz
rumes
scopa
deuce
viewy
lyard
dunch
glisk
tanti
bacon
gryke
gosht
pewee
midis
ulyie
blaws
tapir
kuris
doxie
weigh
strad
fuero
kliks
unpeg
henge
stets
octal
vasts
sokes
ezine
shard
paeon
fifed
staph
mates
merel
decay
sybow
musar
yolky
coxes
educt
sward
vilde
purty
kibla
gaumy
boogy
tanas
alcos
boody
herms
skols
varna
cheer
pappi
frore
hyens
bronc
chats
acnes
howff
bayou
aldea
forte
mulsh
mohrs
renos
stung
gooey
abaya
duroy
bezes
tanka
hammy
volve
embog
briks
trant
scoot
rewet
selva
gaged
likin
crone
urate
steps
costa
wytes
yakow
liked
carps
apter
rymme
hanse
beech
poons
forth
alloy
penie
bowes
rheum
seiza
sings
fails
spayd
hoary
figos
wared
mucic
cohos
slubb
banal
tokos
coact
buggy
kikoi
yukos
deids
vised
lawns
weeds
sprat
mafia
ingle
class
gings
glows
benet
skeos
addle
cusum
puton
douar
riads
leman
strip
jotty
basil
dined
wheep
dhows
tamer
dorba
lorel
girsh
muirs
moits
hooky
levin
exfil
paoli
gryce
holos
pyxis
sined
erned
verse
petal
lubes
dolci
taube
ramet
pints
llama
yests
burds
cello
brome
flats
styed
yummo
yauld
shive
twins
dhaks
mitre
stuff
uncle
bajan
sells
prose
light
venge
noobs
rucks
whare
pipul
spare
oleum
addio
grasp
verst
glide
feals
axman
sutor
wests
bayed
peaty
cutis
griot
kyaks
imbue
qapik
omers
fleet
spica
lenos
wrack
yrivd
egger
feria
bantu
jefes
filii
paiks
thugs
axile
brace
balds
waacs
thewy
kibbi
coved
johns
jumpy
odyle
riped
reaks
flied
scout
kokra
tewit
oners
kedge
praus
bokos
inula
walty
veney
prima
hardy
chams
bends
mauby
chode
latch
plums
yetts
loxed
hains
coder
yarks
endew
djins
kreng
fonts
brume
click
goors
bilge
kamme
drave
nidal
alefs
trues
fries
brine
staun
lenis
bikes
shivs
kadai
foyle
reais
gabby
rites
aulos
jiffy
qadis
takes
flamm
prove
scups
rusas
while
gunks
muter
moles
burfi
yerba
proyn
botch
smits
truce
vines
azoth
xysts
cutie
curet
stuns
tauld
leeze
kited
plook
pails
shero
damar
putti
aahed
cabob
carry
tocks
sdayn
dolos
culti
astun
whang
cyans
glums
areca
gants
abers
takas
tokes
booby
prams
sheol
artal
eager
matts
muntu
qorma
bucko
unwet
rakus
liths
fjord
prase
totem
reams
sulky
diets
grape
brand
calfs
emcee
awful
rodeo
micht
dogan
gasts
deist
malic
jonty
didst
kumis
doles
bobby
pisky
garis
sdein
ragde
murrs
bonza
moobs
sassy
stivy
eyass
gravy
quell
tenes
putto
aguna
kakas
ahent
houts
denar
debus
coati
boxer
wilco
doris
quins
herby
hakus
maars
jnana
mangs
awols
furca
wuses
pardy
chafe
carby
bucku
mimed
dsomo
paysd
blags
ambry
abide
drift
carny
farse
lives
folks
blush
fleur
abaci
tubes
fanum
netty
weary
sower
inapt
gated
reded
ecrus
gursh
snies
udder
today
stent
mimes
stoae
ehing
linos
noose
scudi
weald
ducal
sixth
maria
teths
fitte
bodge
notum
feyer
gaper
spado
lumbi
dowds
steme
taser
grids
parol
bucks
abbas
neume
yells
trawl
raspy
towze
bushy
deeve
rexes
yeard
rifty
spile
rushy
ungot
loony
salet
umbre
shims
forgo
matin
nabks
twank
saber
humas
azuki
quint
jeeze
waves
ceros
dawds
donga
decal
joram
chase
trill
drook
cippi
tease
dodos
wired
hakas
girds
royal
detox
desex
idiom
ploye
weise
ideal
coops
torus
talea
goers
dosed
lambs
haily
sylis
unbag
wormy
altar
wersh
hauns
deeds
oaves
merit
miros
mosts
grill
hamal
murex
dreed
regie
bundh
muist
groat
alpha
shows
daine
flobs
tuism
puses
taver
tryma
yakka
nazir
duomo
sared
fusks
klaps
gleby
coomb
proll
ragga
redon
troak
junks
perai
harsh
white
grunt
grubs
stylo
smirs
canst
toses
dinar
woald
maerl
cubed
pyral
tipis
cutey
muffs
sated
kapow
motey
fohns
coram
geest
sopra
moire
mobes
skaws
icker
skulk
bipod
aliya
avert
babul
tamed
lenes
steel
snees
sisal
bonus
bisom
haffs
spide
halfs
sasin
rocks
surge
vitas
funks
marry
scram
outro
pinas
pownd
stark
nairu
noxal
aleye
thane
mihis
dumpy
brave
jowly
pique
fugus
theta
twigs
utter
lindy
rends
inerm
kinos
bings
milds
myops
impro
yorks
saine
roven
spurt
befit
halve
cecal
micks
gelly
ratty
blind
dorbs
blowy
matza
jowed
compo
peter
potes
crogs
nalas
saggy
enrol
boson
bytes
tryer
amman
dally
masus
idola
wanes
ozone
minke
goldy
feist
linux
litas
nemns
froes
hokum
staps
canna
xysti
pongo
plyer
morae
sworn
skets
geyan
hated
jakes
hydra
gowks
gooky
bills
pitot
flees
poker
bhuts
chaff
omega
crawl
ryper
bemix
smash
cozes
fendy
dynel
musit
rolfs
neafe
jelab
gaurs
hirer
felid
aglow
alecs
almug
betty
haste
ataps
copal
newie
reply
nifty
anole
opals
blawn
incut
males
fouat
tufas
pupae
wawas
plage
arles
draws
tapet
vapor
nylon
swarm
gages
wiels
teugh
thump
stoic
eider
ayont
moted
dashi
gonad
salve
figgy
linch
scray
snebs
sharn
biddy
squeg
myxos
penni
reiki
biccy
wefts
arpas
seedy
fouls
dearn
donsy
ajies
torah
sises
smush
peons
murks
exurb
meaty
natis
rente
potty
chave
wamus
halwa
block
calpa
lowps
terns
fable
lases
solds
moony
chili
kylix
ramus
aitch
soles
fasts
lawny
almes
yugas
ripps
kyang
coden
prunt
barby
maare
celom
divot
vaire
bassy
cooee
blast
adieu
nongs
serum
gappy
crise
swots
sails
batts
aloos
waift
gushy
kisan
xylem
lurex
claws
staff
cools
total
curse
cloze
gytes
wauff
deare
macon
mazes
eches
endow
swung
beaky
pares
khadi
hotly
moils
tiger
rotas
beets
mools
goops
khoja
water
cundy
pilau
alive
steep
beins
twier
deals
thigs
mases
punts
tyres
ploat
agony
burin
giber
corky
petto
aches
merde
naifs
lamas
selfs
taths
lolog
baked
fuzes
pored
hoard
firms
kants
dregs
frabs
yawps
potto
stout
rabat
tapis
speug
pilow
koros
clies
tawai
burka
pareu
mired
benni
kerbs
loury
dhaba
image
tabus
abbes
telly
motis
ghazi
cymes
onium
zaidy
outer
rasse
deoxy
zilla
spart
ixnay
grype
riggs
stoma
leuco
tarok
balti
fanal
nitry
facer
shrow
faded
whims
doven
pozzy
drees
spect
spent
hends
ovoli
fanes
trode
teaze
motor
geums
grits
kames
death`;
const WORDS = RAW_WORDS.split('\n').map(w => (0, Word_1.ToWord)(w));
const ANSWERS = RAW_ANSWERS.split('\n').map(w => (0, Word_1.ToWord)(w));
//# sourceMappingURL=Words.js.map

/***/ }),

/***/ 9740:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientGame = void 0;
const InputManager_1 = __webpack_require__(395);
const PlayerBoard_1 = __webpack_require__(5007);
const Updates_1 = __webpack_require__(3320);
const PlayerState_1 = __webpack_require__(1265);
const LobbyManager_1 = __webpack_require__(6079);
class ClientGame extends PlayerState_1.PlayerState {
    constructor() {
        super();
        this.board = new PlayerBoard_1.PlayerBoard(true, (key) => this.Input(key));
        new InputManager_1.InputManager((char) => this.AddChar(char), () => this.Delete(), () => this.Submit());
    }
    Exit() {
        return new Promise(resolve => setTimeout(resolve, 2000)).then(() => this.board.Exit());
    }
    Enter() {
        this.socket.emit('GameClientReady');
    }
    Register(socket) {
        socket.on('OpponentAddedChar', () => this.OpponentAddedChar());
        socket.on('UpdatedAnswerKnowledge', (update) => this.UpdatedAnswerKnowledge(update));
        socket.on('SetSecret', (secret) => this.SetSecret(secret));
        socket.on('OpponentDeleted', () => this.OpponentDeleted());
        socket.on('OpponentLockedGuess', () => this.OpponentLockedGuess());
        socket.on('OpponentDisconnected', () => this.OpponentDisconnected());
    }
    Deregister(socket) {
        socket.removeAllListeners('OpponentAddedChar');
        socket.removeAllListeners('UpdatedAnswerKnowledge');
        socket.removeAllListeners('SetSecret');
        socket.removeAllListeners('OpponentDeleted');
        socket.removeAllListeners('OpponentLockedGuess');
        socket.removeAllListeners('OpponentDisconnected');
    }
    Input(key) {
        if (key.length === 1) {
            this.AddChar(key);
        }
        else if (key === 'ENT') {
            this.Submit();
        }
        else {
            this.Delete();
        }
    }
    OpponentDisconnected() {
        this.board.OpponentDisconnected();
        this.SwitchState(new LobbyManager_1.LobbyManager());
    }
    SetSecret(secret) {
        this.board.SetSecret(secret);
    }
    OpponentLockedGuess() {
        this.board.OpponentLockedGuess();
    }
    OpponentDeleted() {
        this.board.OpponentDeleted();
    }
    OpponentAddedChar() {
        this.board.OpponentAddedChar();
    }
    EndGame() {
        return new Promise(resolve => {
            this.SwitchState(new LobbyManager_1.LobbyManager(this.board.GameOver()));
            resolve();
        });
    }
    UpdatedAnswerKnowledge(update) {
        const animationPromise = this.board.UpdatedAnswerKnowledge(update);
        Promise.resolve()
            .then(() => animationPromise)
            .then(() => {
            const gameOver = this.board.IsGameOver();
            if (!gameOver) {
                return Promise.resolve();
            }
            return this.EndGame();
        });
    }
    AddChar(char) {
        const command = new Updates_1.AddedChar(char);
        const res = this.board.AddedChar(command);
        // success: tell the server/view about it
        if (res) {
            this.socket.emit('AddedChar', command);
        }
    }
    Delete() {
        const res = this.board.Deleted();
        // success: tell the server/view about it
        if (res) {
            this.socket.emit('Deleted');
        }
    }
    Submit() {
        const res = this.board.LockedGuess();
        // success: tell the server/view about it
        if (res) {
            this.socket.emit('LockedGuess', new Updates_1.LockedGuess(res));
        }
    }
}
exports.ClientGame = ClientGame;
//# sourceMappingURL=ClientGame.js.map

/***/ }),

/***/ 395:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputManager = void 0;
class InputManager {
    constructor(addChar, deleteChar, submitWord) {
        this.addChar = addChar;
        this.deleteChar = deleteChar;
        this.submitWord = submitWord;
        this.registerKeyboardEvents();
    }
    registerKeyboardEvents() {
        document.addEventListener('keyup', e => {
            const key = String(e.key).toUpperCase();
            if (key === 'BACKSPACE') {
                this.deleteChar();
                return;
            }
            if (key === 'ENTER') {
                this.submitWord();
                return;
            }
            const keysPressed = key.match('[A-Z]+');
            if (!keysPressed || key.length > 1) {
                return;
            }
            else {
                this.addChar(key);
                return;
            }
        });
    }
}
exports.InputManager = InputManager;
//# sourceMappingURL=InputManager.js.map

/***/ }),

/***/ 9207:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LetterState = void 0;
var LetterState;
(function (LetterState) {
    LetterState[LetterState["NoKnowledge"] = 0] = "NoKnowledge";
    LetterState[LetterState["NotInWord"] = 1] = "NotInWord";
    LetterState[LetterState["WrongPosition"] = 2] = "WrongPosition";
    LetterState[LetterState["Correct"] = 3] = "Correct";
})(LetterState = exports.LetterState || (exports.LetterState = {}));
//# sourceMappingURL=LetterState.js.map

/***/ }),

/***/ 6531:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Complete = exports.UpdateProgress = exports.TargetProgress = void 0;
const LetterState_1 = __webpack_require__(9207);
class TargetProgress {
    constructor(knownCharacters = ['', '', '', '', '']) {
        this.knownCharacters = knownCharacters;
    }
}
exports.TargetProgress = TargetProgress;
function UpdateProgress(target, knowledge) {
    for (let i = 0; i < knowledge.guess.length; i++) {
        if (knowledge.letterKnowledge[i] === LetterState_1.LetterState.Correct) {
            target.knownCharacters[i] = knowledge.guess[i];
        }
    }
}
exports.UpdateProgress = UpdateProgress;
function Complete(target) {
    const unfilled = target.knownCharacters.filter(c => c === '').length;
    return unfilled === 0;
}
exports.Complete = Complete;
//# sourceMappingURL=TargetProgress.js.map

/***/ }),

/***/ 2921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharUpdate = void 0;
class CharUpdate {
    constructor(char, wordIndex, charIndex) {
        this.char = char;
        this.wordIndex = wordIndex;
        this.charIndex = charIndex;
    }
}
exports.CharUpdate = CharUpdate;
//# sourceMappingURL=CharUpdate.js.map

/***/ }),

/***/ 3270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyboardState = void 0;
const LetterState_1 = __webpack_require__(9207);
const ModelState_1 = __webpack_require__(1052);
const KeyboardView_1 = __webpack_require__(8597);
const ALPHABET = 'QWERTYUIOPASDFGHJKLZXCVBNM';
class KeyboardState extends ModelState_1.ModelState {
    constructor(hasView, input) {
        var _a;
        super(KeyboardView_1.KeyboardView, hasView);
        this.keyState = {};
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Initialize(input);
        this.Reset();
    }
    Reset() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Reset();
        this.keyState = {};
        for (let i = 0; i < ALPHABET.length; i++) {
            this.SetState(ALPHABET[i], LetterState_1.LetterState.NoKnowledge);
        }
    }
    SetState(key, state) {
        var _a;
        if (key in this.keyState && this.keyState[key] === LetterState_1.LetterState.Correct) {
            return;
        }
        this.keyState[key] = state;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetColor(key, state);
    }
    Update(knowledge) {
        knowledge.forEach(k => {
            for (let i = 0; i < k.guess.length; i++) {
                this.SetState(k.guess[i], k.letterKnowledge[i]);
            }
        });
    }
}
exports.KeyboardState = KeyboardState;
//# sourceMappingURL=KeyboardState.js.map

/***/ }),

/***/ 1052:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModelState = void 0;
class ModelState {
    constructor(makeView, hasView = false) {
        this.makeView = makeView;
        this.view = null;
        if (hasView) {
            this.view = new makeView();
        }
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
}
exports.ModelState = ModelState;
//# sourceMappingURL=ModelState.js.map

/***/ }),

/***/ 8112:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationState = void 0;
const ModelState_1 = __webpack_require__(1052);
const NotificationView_1 = __webpack_require__(5085);
class NotificationState extends ModelState_1.ModelState {
    constructor(hasView) {
        super(NotificationView_1.NotificationView, hasView);
    }
    Reset() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Reset();
    }
    Won() {
        var _a;
        if (this.view) {
            return (_a = this.view) === null || _a === void 0 ? void 0 : _a.Won();
        }
        return Promise.resolve();
    }
    Lost() {
        var _a;
        if (this.view) {
            return (_a = this.view) === null || _a === void 0 ? void 0 : _a.Lost();
        }
        return Promise.resolve();
    }
    Tied() {
        var _a;
        if (this.view) {
            return (_a = this.view) === null || _a === void 0 ? void 0 : _a.Tie();
        }
        return Promise.resolve();
    }
}
exports.NotificationState = NotificationState;
//# sourceMappingURL=NotificationState.js.map

/***/ }),

/***/ 2782:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpponentBoardState = void 0;
const OpponentUpdate_1 = __webpack_require__(3984);
const OpponentBoardView_1 = __webpack_require__(8165);
const Word_1 = __webpack_require__(2803);
const Animation_1 = __webpack_require__(9902);
const ModelState_1 = __webpack_require__(1052);
class OpponentBoardState extends ModelState_1.ModelState {
    constructor(hasView) {
        super(OpponentBoardView_1.OpponentBoardView, hasView);
        this.guesses = [];
        this.opponentCharCount = 0;
    }
    OpponentAddedChar() {
        var _a;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.AddChar, this.guesses.length, this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
        this.opponentCharCount++;
    }
    OpponentDeleted() {
        var _a;
        this.opponentCharCount--;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.Delete, this.guesses.length, this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
    }
    OpponentLockedGuess() {
        var _a;
        this.opponentCharCount = 0;
        const update = new OpponentUpdate_1.OpponentUpdate(OpponentUpdate_1.OpponentUpdateType.Submit, this.guesses.length, this.opponentCharCount);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.OpponentUpdate(update);
    }
    Update(knowledge) {
        this.guesses.push((0, Word_1.ToWord)(knowledge.guess));
        const animations = [];
        for (let i = 0; i < knowledge.guess.length; i++) {
            animations.push(new Animation_1.LetterAnimation(i + 5, () => {
                var _a;
                return (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetCharKnowledge(this.guesses.length - 1, i, knowledge.guess[i], knowledge.letterKnowledge[i]);
            }));
        }
        return animations;
    }
    Reset() {
        this.guesses = [];
        this.opponentCharCount = 0;
    }
}
exports.OpponentBoardState = OpponentBoardState;
//# sourceMappingURL=OpponentBoardState.js.map

/***/ }),

/***/ 5226:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpponentPasswordState = void 0;
const ModelState_1 = __webpack_require__(1052);
const OpponentPasswordView_1 = __webpack_require__(6617);
var State;
(function (State) {
    State[State["WaitingForPassword"] = 0] = "WaitingForPassword";
    State[State["PasswordRecieved"] = 1] = "PasswordRecieved";
})(State || (State = {}));
class OpponentPasswordState extends ModelState_1.ModelState {
    constructor(hasView) {
        super(OpponentPasswordView_1.OpponentPasswordView, hasView);
        this.password = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
    }
    Reset() {
        this.password = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
    }
    Update(progress, playerGuess) {
        for (let i = 0; i < progress.knownCharacters.length; i++) {
            if (progress.knownCharacters[i] !== '') {
                this.password[i] = progress.knownCharacters[i];
            }
        }
        if (this.view) {
            return this.view.Update(progress, playerGuess);
        }
        return [];
    }
    Won() {
        return this.password.filter(c => c === '').length === 0;
    }
}
exports.OpponentPasswordState = OpponentPasswordState;
//# sourceMappingURL=OpponentPasswordState.js.map

/***/ }),

/***/ 3984:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpponentUpdate = exports.OpponentUpdateType = void 0;
var OpponentUpdateType;
(function (OpponentUpdateType) {
    OpponentUpdateType[OpponentUpdateType["AddChar"] = 0] = "AddChar";
    OpponentUpdateType[OpponentUpdateType["Delete"] = 1] = "Delete";
    OpponentUpdateType[OpponentUpdateType["Submit"] = 2] = "Submit";
})(OpponentUpdateType = exports.OpponentUpdateType || (exports.OpponentUpdateType = {}));
class OpponentUpdate {
    constructor(type, wordIndex, charIndex) {
        this.type = type;
        this.wordIndex = wordIndex;
        this.charIndex = charIndex;
    }
}
exports.OpponentUpdate = OpponentUpdate;
//# sourceMappingURL=OpponentUpdate.js.map

/***/ }),

/***/ 5007:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerBoard = void 0;
const Updates_1 = __webpack_require__(3320);
const YourBoardState_1 = __webpack_require__(9625);
const YourPasswordState_1 = __webpack_require__(2777);
const OpponentBoardState_1 = __webpack_require__(2782);
const OpponentPasswordState_1 = __webpack_require__(5226);
const NotificationState_1 = __webpack_require__(8112);
const KeyboardState_1 = __webpack_require__(3270);
const TimerState_1 = __webpack_require__(549);
const Words_1 = __webpack_require__(5210);
const EndGameState_1 = __webpack_require__(2280);
class PlayerBoard {
    constructor(hasView = false, input = () => { }) {
        this.hasView = hasView;
        this.input = input;
        this.yourBoard = new YourBoardState_1.YourBoardState(this.hasView);
        this.yourPassword = new YourPasswordState_1.YourPasswordState(this.hasView);
        this.opponentBoard = new OpponentBoardState_1.OpponentBoardState(this.hasView);
        this.opponentPassword = new OpponentPasswordState_1.OpponentPasswordState(this.hasView);
        this.notification = new NotificationState_1.NotificationState(this.hasView);
        this.keyboard = new KeyboardState_1.KeyboardState(this.hasView, this.input);
        this.timer = new TimerState_1.TimerState(this.hasView, () => this.TimerExhausted());
        this.endGame = null;
    }
    Reset() {
        this.yourBoard.Reset();
        this.yourPassword.Reset();
        this.opponentBoard.Reset();
        this.opponentPassword.Reset();
        this.notification.Reset();
        this.keyboard.Reset();
        this.timer.Reset();
    }
    Exit() {
        this.yourBoard.Exit();
        this.yourPassword.Exit();
        this.opponentBoard.Exit();
        this.opponentPassword.Exit();
        this.notification.Exit();
        this.keyboard.Exit();
        this.timer.Exit();
    }
    GameClientReady() { }
    OpponentDisconnected() { }
    TimerExhausted() {
        const randomGuess = (0, Words_1.GetRandomGuess)();
        for (let i = 0; i < randomGuess.length; i++) {
            this.input('DEL');
        }
        for (let i = 0; i < randomGuess.length; i++) {
            this.input(randomGuess[i]);
        }
        this.input('ENT');
    }
    AddedChar(update) {
        return this.yourBoard.AddChar(update.char);
    }
    Deleted() {
        return this.yourBoard.Delete();
    }
    LockedGuess() {
        const res = this.yourBoard.LockedGuess();
        if (res) {
            this.timer.LockedGuess();
        }
        return res;
    }
    IsGameOver() {
        return this.endGame !== null;
    }
    GameOver() {
        return this.endGame;
    }
    OpponentAddedChar() {
        this.opponentBoard.OpponentAddedChar();
    }
    OpponentDeleted() {
        this.opponentBoard.OpponentDeleted();
    }
    OpponentLockedGuess() {
        this.opponentBoard.OpponentLockedGuess();
        this.timer.OpponentSubmitted();
    }
    UpdatedAnswerKnowledge(update) {
        // Gather animations
        this.timer.UpdateKnowledge();
        const animations = [];
        animations.push(...this.yourBoard.Update(update.playerKnowledge));
        animations.push(...this.opponentBoard.Update(update.opponentKnowledge));
        animations.push(...this.yourPassword.Update(update.playerProgress, update.playerKnowledge.guess));
        animations.push(...this.opponentPassword.Update(update.opponentProgress, update.playerKnowledge.guess));
        this.keyboard.Update([update.playerKnowledge, update.opponentKnowledge]);
        // Sequence them
        const sequence = {};
        animations.forEach(animation => {
            const index = animation.letterIndex;
            if (!(index in sequence)) {
                sequence[index] = [];
            }
            sequence[index].push(animation.animationStart);
        });
        // String them into a promise
        let promise = new Promise(resolve => resolve());
        for (let i = 0; i < 10; i++) {
            if (!(i in sequence)) {
                continue;
            }
            sequence[i].forEach(animationCallback => {
                promise = promise.then(() => {
                    animationCallback();
                    return Promise.resolve();
                });
            });
            promise = promise.then(() => new Promise(resolve => setTimeout(resolve, 400)));
        }
        // Check if the game is over
        if ((0, Updates_1.IsGameOver)(update)) {
            this.endGame = update.endGameState;
            switch ((0, Updates_1.GameOverState)(update)) {
                case EndGameState_1.EndGameState.Loss:
                    promise.then(() => this.notification.Lost());
                    break;
                case EndGameState_1.EndGameState.Win:
                    promise.then(() => this.notification.Won());
                    break;
                case EndGameState_1.EndGameState.Tie:
                    promise.then(() => this.notification.Tied());
                    break;
            }
        }
        return promise;
    }
    SetSecret(secret) {
        this.Reset();
        this.yourPassword.SetPassword(secret);
    }
}
exports.PlayerBoard = PlayerBoard;
//# sourceMappingURL=PlayerBoard.js.map

/***/ }),

/***/ 549:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimerState = void 0;
const ModelState_1 = __webpack_require__(1052);
const TimerView_1 = __webpack_require__(3810);
const TIME_TILL_RANDOM_MILLIS = 30000;
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["NoGuesses"] = 1] = "NoGuesses";
    State[State["PlayerGuessed"] = 2] = "PlayerGuessed";
    State[State["OpponentGuessed"] = 3] = "OpponentGuessed";
    State[State["BothGuessed"] = 4] = "BothGuessed";
})(State || (State = {}));
class TimerState extends ModelState_1.ModelState {
    constructor(hasView, timeExhausted) {
        super(TimerView_1.TimerView, hasView);
        this.hasView = hasView;
        this.timeExhausted = timeExhausted;
        this.state = State.None;
        this.timeLeft = TIME_TILL_RANDOM_MILLIS;
        this.timeout = null;
        this.lastUpdate = 0;
        this.SetState(State.NoGuesses);
    }
    Exit() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Exit();
    }
    Reset() {
        this.ResetTimer();
    }
    LockedGuess() {
        switch (this.state) {
            case State.OpponentGuessed:
                this.SetState(State.BothGuessed);
                break;
            case State.NoGuesses:
                this.SetState(State.PlayerGuessed);
                break;
        }
    }
    OpponentSubmitted() {
        switch (this.state) {
            case State.PlayerGuessed:
                this.SetState(State.BothGuessed);
                break;
            case State.NoGuesses:
                this.SetState(State.OpponentGuessed);
                break;
        }
    }
    UpdateKnowledge() {
        this.SetState(State.NoGuesses);
    }
    ResetTimer() {
        var _a;
        clearInterval(this.timeout);
        this.timeLeft = TIME_TILL_RANDOM_MILLIS;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.Reset();
    }
    StartTimer() {
        this.lastUpdate = Date.now();
        this.timeout = setInterval(() => this.UpdateTimer(), 100);
    }
    TimeExhausted() {
        var _a;
        clearInterval(this.timeout);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.TimeExhausted();
        this.timeExhausted();
    }
    UpdateTimer() {
        var _a;
        if (this.timeLeft < 0) {
            this.TimeExhausted();
            return;
        }
        const updateTime = Date.now();
        this.timeLeft -= updateTime - this.lastUpdate;
        this.lastUpdate = updateTime;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.UpdateTime(this.timeLeft);
    }
    SetState(newState) {
        if (!this.hasView) {
            return;
        }
        if (this.state === State.OpponentGuessed) {
            this.ResetTimer();
        }
        this.state = newState;
        if (this.state === State.OpponentGuessed) {
            this.StartTimer();
        }
    }
}
exports.TimerState = TimerState;
//# sourceMappingURL=TimerState.js.map

/***/ }),

/***/ 9625:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YourBoardState = void 0;
const CharUpdate_1 = __webpack_require__(2921);
const YourBoardView_1 = __webpack_require__(3998);
const Word_1 = __webpack_require__(2803);
const Words_1 = __webpack_require__(5210);
const Updates_1 = __webpack_require__(3320);
const Animation_1 = __webpack_require__(9902);
const ModelState_1 = __webpack_require__(1052);
var State;
(function (State) {
    State[State["CanSubmit"] = 0] = "CanSubmit";
    State[State["Locked"] = 1] = "Locked";
})(State || (State = {}));
class YourBoardState extends ModelState_1.ModelState {
    constructor(hasView) {
        super(YourBoardView_1.YourBoardView, hasView);
        this.guesses = [];
        this.currentGuess = '';
        this.state = State.CanSubmit;
    }
    AddChar(char) {
        var _a, _b;
        if (this.state !== State.CanSubmit) {
            return false;
        }
        if (this.currentGuess.length === 5) {
            return false;
        }
        const update = new CharUpdate_1.CharUpdate(char, this.guesses.length, this.currentGuess.length);
        this.currentGuess += char;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.CharUpdate(update);
        if (this.currentGuess.length === 5) {
            const guess = (0, Word_1.ToWord)(this.currentGuess);
            if (!(0, Words_1.IsValidWord)(guess)) {
                (_b = this.view) === null || _b === void 0 ? void 0 : _b.SubmitError(new Updates_1.LockedGuessError(Updates_1.ErrorType.NotValidWord, this.guesses.length, this.currentGuess.length));
            }
        }
        return true;
    }
    Delete() {
        var _a;
        if (this.state !== State.CanSubmit) {
            return false;
        }
        if (this.currentGuess.length === 0) {
            return false;
        }
        this.currentGuess = this.currentGuess.slice(0, -1);
        const update = new CharUpdate_1.CharUpdate('', this.guesses.length, this.currentGuess.length);
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.CharUpdate(update);
        return true;
    }
    LockedGuess() {
        var _a, _b, _c;
        if (this.state !== State.CanSubmit) {
            return null;
        }
        if (this.currentGuess.length !== 5) {
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.SubmitError(new Updates_1.LockedGuessError(Updates_1.ErrorType.TooShort, this.guesses.length, this.currentGuess.length));
            return null;
        }
        const guess = (0, Word_1.ToWord)(this.currentGuess);
        if (!(0, Words_1.IsValidWord)(guess)) {
            (_b = this.view) === null || _b === void 0 ? void 0 : _b.SubmitError(new Updates_1.LockedGuessError(Updates_1.ErrorType.NotValidWord, this.guesses.length, this.currentGuess.length));
            return null;
        }
        this.state = State.Locked;
        (_c = this.view) === null || _c === void 0 ? void 0 : _c.GuessLocked(new Updates_1.GuessLocked(this.guesses.length));
        return (0, Word_1.ToWord)(this.currentGuess);
    }
    Update(knowledge) {
        this.guesses.push((0, Word_1.ToWord)(knowledge.guess));
        const animations = [];
        for (let i = 0; i < knowledge.guess.length; i++) {
            animations.push(new Animation_1.LetterAnimation(i, () => {
                var _a;
                return (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetCharKnowledge(this.guesses.length - 1, i, knowledge.guess[i], knowledge.letterKnowledge[i]);
            }));
        }
        this.currentGuess = '';
        this.state = State.CanSubmit;
        return animations;
    }
    GuessCount() {
        return this.guesses.length;
    }
    Reset() {
        this.guesses = [];
        this.currentGuess = '';
        this.state = State.CanSubmit;
    }
}
exports.YourBoardState = YourBoardState;
//# sourceMappingURL=YourBoardState.js.map

/***/ }),

/***/ 2777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YourPasswordState = void 0;
const YourPasswordView_1 = __webpack_require__(6906);
const ModelState_1 = __webpack_require__(1052);
var State;
(function (State) {
    State[State["WaitingForPassword"] = 0] = "WaitingForPassword";
    State[State["PasswordRecieved"] = 1] = "PasswordRecieved";
})(State || (State = {}));
class YourPasswordState extends ModelState_1.ModelState {
    constructor(hasView) {
        super(YourPasswordView_1.YourPasswordView, hasView);
        this.password = null;
        this.knownCharacters = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
    }
    SetPassword(password) {
        var _a;
        this.password = password;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.SetSecret(this.password);
    }
    Reset() {
        this.password = null;
        this.knownCharacters = ['', '', '', '', ''];
        this.state = State.WaitingForPassword;
    }
    Update(target, playerGuess) {
        for (let i = 0; i < target.knownCharacters.length; i++) {
            if (target.knownCharacters[i] !== '') {
                this.knownCharacters[i] = target.knownCharacters[i];
            }
        }
        if (this.view) {
            return this.view.Update(target, playerGuess);
        }
        return [];
    }
    Lost() {
        return this.knownCharacters.filter(c => c === '').length === 0;
    }
}
exports.YourPasswordState = YourPasswordState;
//# sourceMappingURL=YourPasswordState.js.map

/***/ }),

/***/ 6447:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimateCSS = exports.AnimationType = void 0;
var AnimationType;
(function (AnimationType) {
    AnimationType["Pulse"] = "pulse";
    AnimationType["BounceIn"] = "bounceIn";
    AnimationType["FlipInX"] = "flipInX";
    AnimationType["HeartBeat"] = "heartBeat";
    AnimationType["ShakeX"] = "shakeX";
    AnimationType["ShakeY"] = "shakeY";
    AnimationType["FadeIn"] = "fadeIn";
    AnimationType["FadeOut"] = "fadeOut";
})(AnimationType = exports.AnimationType || (exports.AnimationType = {}));
const ANIMATION_DURATION_STR = '--animate-duration';
const ANIMATION_CLASS_STR = 'animate__animated';
// From https://animate.style/#javascript
function AnimateCSS(element, animation, duration = 0.5) {
    return new Promise(resolve => {
        const animationName = `animate__${animation.toString()}`;
        const node = element;
        node.style.setProperty(ANIMATION_DURATION_STR, `${duration.toFixed(2)}s`);
        node.classList.add(ANIMATION_CLASS_STR, animationName);
        function animationEnd(event) {
            event.stopPropagation();
            node.classList.remove(ANIMATION_CLASS_STR, animationName);
            resolve('Animation complete');
        }
        node.addEventListener('animationend', animationEnd, { once: true });
    });
}
exports.AnimateCSS = AnimateCSS;
//# sourceMappingURL=Animate.js.map

/***/ }),

/***/ 8597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyboardView = void 0;
const LetterState_1 = __webpack_require__(9207);
const Animate_1 = __webpack_require__(6447);
const Subview_1 = __webpack_require__(1194);
const LetterView_1 = __webpack_require__(585);
const KEYS = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['ENT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'DEL'],
];
class KeyboardView extends Subview_1.Subview {
    constructor() {
        const base = document.getElementById('keyboard');
        super(base, 'keyboard');
        this.keys = {};
    }
    Initialize(input) {
        KEYS.forEach(row => {
            const rowElement = this.AddDiv(this.root, 'keyboard-row');
            row.forEach(key => {
                key = key.toUpperCase();
                this.keys[key] = this.AddButton(rowElement, 'keyboard-key', key, () => input(key));
                if (key === 'ENT' || key === 'DEL') {
                    this.keys[key].classList.add('keyboard-command-key');
                }
            });
        });
    }
    SetColor(key, state) {
        key = key.toUpperCase();
        const color = ToColor(state);
        const element = this.keys[key];
        element.style.backgroundColor = color;
        switch (color) {
            default:
                break;
            case LetterView_1.LetterColor.Green:
            case LetterView_1.LetterColor.Yellow:
            case LetterView_1.LetterColor.Grey:
                (0, Animate_1.AnimateCSS)(element, Animate_1.AnimationType.Pulse, 0.5);
                break;
        }
    }
    Reset() { }
}
exports.KeyboardView = KeyboardView;
function ToColor(state) {
    switch (state) {
        case LetterState_1.LetterState.Correct:
            return LetterView_1.LetterColor.Green;
        case LetterState_1.LetterState.NoKnowledge:
            return LetterView_1.LetterColor.LightGrey;
        case LetterState_1.LetterState.NotInWord:
            return LetterView_1.LetterColor.Grey;
        case LetterState_1.LetterState.WrongPosition:
            return LetterView_1.LetterColor.Yellow;
    }
}
//# sourceMappingURL=KeyboardView.js.map

/***/ }),

/***/ 5085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationView = void 0;
const Subview_1 = __webpack_require__(1194);
class NotificationView extends Subview_1.Subview {
    Reset() {
        this.SetText('');
    }
    constructor() {
        const base = document.getElementById('notification');
        super(base, 'notification');
    }
    SetText(text) {
        return new Promise(resolve => {
            this.root.innerText = text;
            resolve();
        });
    }
    Won() {
        return this.SetText('You won!');
    }
    Lost() {
        return this.SetText('You lost!');
    }
    Tie() {
        return this.SetText('You tied!');
    }
}
exports.NotificationView = NotificationView;
//# sourceMappingURL=NotificationView.js.map

/***/ }),

/***/ 8165:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpponentBoardView = void 0;
const LetterState_1 = __webpack_require__(9207);
const OpponentUpdate_1 = __webpack_require__(3984);
const Subview_1 = __webpack_require__(1194);
const LetterView_1 = __webpack_require__(585);
const WordView_1 = __webpack_require__(6987);
class OpponentBoardView extends Subview_1.Subview {
    constructor() {
        const base = document.getElementById('opponent');
        super(base, 'board', 'Opponent Guesses');
        this.words = [];
        for (let i = 0; i < 6; i++) {
            const word = new OpponentWordView(this.root);
            this.words.push(word);
            this.AddSubview(word);
        }
    }
    SetCharKnowledge(wordIndex, charIndex, char, knowledge) {
        this.words[wordIndex].SetKnowledge(charIndex, char, knowledge);
    }
    OpponentUpdate(update) {
        this.words[update.wordIndex].OpponentUpdate(update.type, update.charIndex);
    }
    Reset() {
        this.words.forEach(word => word.Reset());
    }
}
exports.OpponentBoardView = OpponentBoardView;
class OpponentWordView extends WordView_1.BaseWordView {
    OpponentUpdate(type, charIndex) {
        switch (type) {
            case OpponentUpdate_1.OpponentUpdateType.AddChar:
                this.letters[charIndex].SetColor(LetterView_1.LetterColor.LightGrey);
                break;
            case OpponentUpdate_1.OpponentUpdateType.Delete:
                this.letters[charIndex].SetColor(LetterView_1.LetterColor.White);
                break;
            case OpponentUpdate_1.OpponentUpdateType.Submit:
                this.letters.forEach(letter => letter.SetColor(LetterView_1.LetterColor.LightGrey));
                break;
        }
    }
    SetKnowledge(charIndex, char, knowledge) {
        const letter = this.letters[charIndex];
        letter.SetChar(char);
        switch (knowledge) {
            case LetterState_1.LetterState.NoKnowledge:
                letter.SetColor(LetterView_1.LetterColor.White);
                break;
            case LetterState_1.LetterState.NotInWord:
                letter.SetColor(LetterView_1.LetterColor.Grey);
                break;
            case LetterState_1.LetterState.Correct:
                letter.SetColor(LetterView_1.LetterColor.Green);
                break;
            case LetterState_1.LetterState.WrongPosition:
                letter.SetColor(LetterView_1.LetterColor.Yellow);
                break;
        }
    }
}
//# sourceMappingURL=OpponentBoardView.js.map

/***/ }),

/***/ 6617:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpponentPasswordView = void 0;
const Animation_1 = __webpack_require__(9902);
const Subview_1 = __webpack_require__(1194);
const LetterView_1 = __webpack_require__(585);
const WordView_1 = __webpack_require__(6987);
class OpponentPasswordView extends Subview_1.Subview {
    constructor() {
        const base = document.getElementById('target');
        super(base, 'target', "Opponent's Password", 'If these are all green, you win!');
        this.answer = new TargetWordView(this.root);
        this.AddSubview(this.answer);
    }
    Update(target, playerGuess) {
        const animations = [];
        for (let i = 0; i < target.knownCharacters.length; i++) {
            if (target.knownCharacters[i] === '') {
                continue;
            }
            const animation = this.answer.UpdateProgress(i, target.knownCharacters[i]);
            if (animation) {
                if (playerGuess[i] === target.knownCharacters[i]) {
                    animations.push(new Animation_1.LetterAnimation(i, animation));
                }
                else {
                    animations.push(new Animation_1.LetterAnimation(i + 5, animation));
                }
            }
        }
        return animations;
    }
    GetAnimations(guess, target) {
        const animations = [];
        for (let i = 0; i < target.knownCharacters.length; i++) {
            if (target.knownCharacters[i] === '') {
                animations.push(null);
                continue;
            }
            if (target.knownCharacters[i] !== guess[i]) {
                animations.push(null);
                continue;
            }
            animations.push(this.answer.UpdateProgress(i, target.knownCharacters[i]));
        }
        return animations;
    }
    Reset() {
        this.answer.Reset();
    }
}
exports.OpponentPasswordView = OpponentPasswordView;
class TargetWordView extends WordView_1.BaseWordView {
    UpdateProgress(charIndex, char) {
        const letter = this.letters[charIndex];
        if (letter.Color() !== LetterView_1.LetterColor.Green) {
            return () => {
                letter.SetChar(char);
                letter.SetColor(LetterView_1.LetterColor.Green);
            };
        }
        else {
            return null;
        }
    }
}
//# sourceMappingURL=OpponentPasswordView.js.map

/***/ }),

/***/ 6878:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddPopup = void 0;
const Animate_1 = __webpack_require__(6447);
function AddPopup(target, text, durationSeconds = 1.5) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = text;
    target.appendChild(popup);
    (0, Animate_1.AnimateCSS)(popup, Animate_1.AnimationType.BounceIn, 0.5)
        .then(() => new Promise(resolve => setTimeout(resolve, 1000 * (durationSeconds - 1))))
        .then(() => {
        (0, Animate_1.AnimateCSS)(popup, Animate_1.AnimationType.FadeOut, 0.5);
        return new Promise(resolve => setTimeout(resolve, 450));
    })
        .finally(() => popup.remove());
}
exports.AddPopup = AddPopup;
//# sourceMappingURL=Popup.js.map

/***/ }),

/***/ 1194:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Subview = void 0;
class Subview {
    constructor(base, rootClassName, explanationText = '', longFormExplanationText = '') {
        this.elements = [];
        this.subviews = [];
        this.root = this.AddDiv(base, rootClassName);
        if (longFormExplanationText !== '') {
            this.root.classList.add('explain-hover');
            this.AddLongExplanation(base, longFormExplanationText);
        }
        if (explanationText !== '') {
            this.AddExplanation(base, explanationText);
        }
    }
    Exit() {
        this.subviews.forEach(subview => subview.Exit());
        this.elements.forEach(element => element.remove());
    }
    AddSubview(subview) {
        this.subviews.push(subview);
    }
    AddDiv(parent, className) {
        const div = document.createElement('div');
        div.className = className;
        parent.appendChild(div);
        this.elements.push(div);
        return div;
    }
    AddButton(parent, className, text, callback) {
        const button = document.createElement('button');
        button.className = className;
        button.innerText = text;
        button.onclick = callback;
        parent.appendChild(button);
        this.elements.push(button);
        return button;
    }
    AddExplanation(base, text) {
        const explanation = this.AddDiv(base, 'explanation');
        explanation.innerText = text;
    }
    AddLongExplanation(base, text) {
        const explanation = this.AddDiv(base, 'long-explanation');
        explanation.innerText = text;
    }
}
exports.Subview = Subview;
//# sourceMappingURL=Subview.js.map

/***/ }),

/***/ 3810:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimerView = void 0;
const Subview_1 = __webpack_require__(1194);
class TimerView extends Subview_1.Subview {
    constructor() {
        const base = document.getElementById('timer');
        super(base, 'timer', 'Timer');
        this.time = this.AddDiv(base, 'timer');
    }
    Reset() {
        this.time.innerText = 'No timer.';
    }
    UpdateTime(timeMillis) {
        this.time.innerText = Math.abs(timeMillis / 1000).toFixed(0) + 's left!';
    }
    TimeExhausted() {
        this.time.innerText = "Time's up!";
    }
}
exports.TimerView = TimerView;
//# sourceMappingURL=TimerView.js.map

/***/ }),

/***/ 3998:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YourBoardView = void 0;
const LetterState_1 = __webpack_require__(9207);
const Subview_1 = __webpack_require__(1194);
const LetterView_1 = __webpack_require__(585);
const WordView_1 = __webpack_require__(6987);
class YourBoardView extends Subview_1.Subview {
    constructor() {
        const base = document.getElementById('player');
        super(base, 'board', 'Your Guesses');
        this.words = [];
        for (let i = 0; i < 6; i++) {
            const word = new PlayerWordView(this.root);
            this.words.push(word);
            this.AddSubview(word);
        }
    }
    Reset() {
        this.words.forEach(word => word.Reset());
    }
    SetCharKnowledge(wordIndex, charIndex, char, knowledge) {
        this.words[wordIndex].SetKnowledge(charIndex, char, knowledge);
    }
    CharUpdate(update) {
        this.words[update.wordIndex].AddChar(update.char, update.charIndex);
    }
    SubmitError(error) {
        this.words[error.wordIndex].LockedGuessError(error);
    }
    GuessLocked(update) {
        this.words[update.index].GuessLocked();
    }
}
exports.YourBoardView = YourBoardView;
class PlayerWordView extends WordView_1.BaseWordView {
    AddChar(char, index) {
        this.letters[index].SetChar(char);
    }
    SetKnowledge(charIndex, char, knowledge) {
        const letter = this.letters[charIndex];
        letter.SetChar(char);
        switch (knowledge) {
            case LetterState_1.LetterState.NoKnowledge:
                letter.SetColor(LetterView_1.LetterColor.White);
                break;
            case LetterState_1.LetterState.NotInWord:
                letter.SetColor(LetterView_1.LetterColor.Grey);
                break;
            case LetterState_1.LetterState.Correct:
                letter.SetColor(LetterView_1.LetterColor.Green);
                break;
            case LetterState_1.LetterState.WrongPosition:
                letter.SetColor(LetterView_1.LetterColor.Yellow);
                break;
        }
    }
    GuessLocked() {
        this.letters.forEach(letter => {
            letter.SetColor(LetterView_1.LetterColor.LightGrey);
        });
    }
}
//# sourceMappingURL=YourBoardView.js.map

/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YourPasswordView = void 0;
const Animation_1 = __webpack_require__(9902);
const Subview_1 = __webpack_require__(1194);
const LetterView_1 = __webpack_require__(585);
const WordView_1 = __webpack_require__(6987);
class YourPasswordView extends Subview_1.Subview {
    constructor() {
        const base = document.getElementById('answer');
        super(base, 'answer', 'Your Password', 'If these are all red, you lose!');
        this.answer = new AnswerWordView(this.root);
        this.AddSubview(this.answer);
    }
    SetSecret(secret) {
        this.answer.SetSecret(secret);
    }
    Reset() {
        this.answer.Reset();
    }
    Update(target, playerGuess) {
        const animations = [];
        for (let i = 0; i < target.knownCharacters.length; i++) {
            if (target.knownCharacters[i] === '') {
                continue;
            }
            const animation = this.answer.UpdateProgress(i);
            if (animation) {
                if (playerGuess[i] === target.knownCharacters[i]) {
                    animations.push(new Animation_1.LetterAnimation(i, animation));
                }
                else {
                    animations.push(new Animation_1.LetterAnimation(i + 5, animation));
                }
            }
        }
        return animations;
    }
    GetAnimations(guess, target) {
        const animations = [];
        for (let i = 0; i < target.knownCharacters.length; i++) {
            if (target.knownCharacters[i] === '') {
                animations.push(null);
                continue;
            }
            if (target.knownCharacters[i] !== guess[i]) {
                animations.push(null);
                continue;
            }
            animations.push(this.answer.UpdateProgress(i));
        }
        return animations;
    }
}
exports.YourPasswordView = YourPasswordView;
class AnswerWordView extends WordView_1.BaseWordView {
    SetSecret(secret) {
        for (let i = 0; i < secret.length; i++) {
            this.letters[i].SetChar(secret[i]);
        }
    }
    UpdateProgress(charIndex) {
        const letter = this.letters[charIndex];
        if (letter.Color() !== LetterView_1.LetterColor.Red) {
            return () => {
                letter.SetColor(LetterView_1.LetterColor.Red);
            };
        }
        else {
            return null;
        }
    }
}
//# sourceMappingURL=YourPasswordView.js.map

/***/ }),

/***/ 9902:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LetterAnimation = void 0;
class LetterAnimation {
    constructor(letterIndex, animationStart) {
        this.letterIndex = letterIndex;
        this.animationStart = animationStart;
    }
}
exports.LetterAnimation = LetterAnimation;
//# sourceMappingURL=Animation.js.map

/***/ }),

/***/ 6987:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseWordView = void 0;
const LetterView_1 = __webpack_require__(585);
const Subview_1 = __webpack_require__(1194);
const Updates_1 = __webpack_require__(3320);
const Popup_1 = __webpack_require__(6878);
const WORD_LENGTH = 5;
class BaseWordView extends Subview_1.Subview {
    constructor(root) {
        super(root, 'word');
        this.letters = [];
        for (let i = 0; i < WORD_LENGTH; i++) {
            const letter = new LetterView_1.LetterView(this.root);
            this.letters.push(letter);
            this.AddSubview(letter);
        }
    }
    Reset() {
        this.letters.forEach(letter => letter.Reset());
    }
    LockedGuessError(error) {
        switch (error.type) {
            case Updates_1.ErrorType.NotValidWord:
                (0, Popup_1.AddPopup)(this.root, 'Not valid word!', 1.5);
                this.letters.forEach(letter => letter.Error());
                break;
            case Updates_1.ErrorType.TooShort:
                break;
        }
    }
}
exports.BaseWordView = BaseWordView;
//# sourceMappingURL=WordView.js.map

/***/ }),

/***/ 585:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LetterView = exports.LetterColor = void 0;
const Animate_1 = __webpack_require__(6447);
const Subview_1 = __webpack_require__(1194);
var LetterColor;
(function (LetterColor) {
    LetterColor["White"] = "white";
    LetterColor["Yellow"] = "yellow";
    LetterColor["Green"] = "forestgreen";
    LetterColor["Grey"] = "grey";
    LetterColor["LightGrey"] = "lightgrey";
    LetterColor["Red"] = "crimson";
})(LetterColor = exports.LetterColor || (exports.LetterColor = {}));
class LetterView extends Subview_1.Subview {
    constructor(base) {
        super(base, 'letter');
        this.color = LetterColor.White;
    }
    Error() {
        (0, Animate_1.AnimateCSS)(this.root, Animate_1.AnimationType.ShakeY);
    }
    SetChar(char) {
        this.root.innerText = char;
    }
    ClearChar() {
        this.root.innerText = '';
    }
    Color() {
        return this.color;
    }
    SetColor(color) {
        this.root.style.backgroundColor = color;
        this.color = color;
        switch (color) {
            default:
                break;
            case LetterColor.Green:
            case LetterColor.Yellow:
                (0, Animate_1.AnimateCSS)(this.root, Animate_1.AnimationType.FlipInX, 0.5);
                break;
            case LetterColor.Red:
                (0, Animate_1.AnimateCSS)(this.root, Animate_1.AnimationType.HeartBeat, 0.5);
                break;
            case LetterColor.LightGrey:
                (0, Animate_1.AnimateCSS)(this.root, Animate_1.AnimationType.BounceIn, 0.5);
                break;
        }
    }
    Reset() {
        this.ClearChar();
        this.SetColor(LetterColor.White);
    }
}
exports.LetterView = LetterView;
//# sourceMappingURL=LetterView.js.map

/***/ }),

/***/ 3320:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LockedGuessError = exports.ErrorType = exports.LockedGuess = exports.GuessLocked = exports.GameOverState = exports.IsGameOver = exports.UpdatedAnswerKnowledge = exports.Deleted = exports.AddedChar = void 0;
const EndGameState_1 = __webpack_require__(2280);
class AddedChar {
    constructor(char) {
        this.char = char;
    }
}
exports.AddedChar = AddedChar;
class Deleted {
}
exports.Deleted = Deleted;
class UpdatedAnswerKnowledge {
    constructor(playerKnowledge, opponentKnowledge, playerProgress, opponentProgress, endGameState) {
        this.playerKnowledge = playerKnowledge;
        this.opponentKnowledge = opponentKnowledge;
        this.playerProgress = playerProgress;
        this.opponentProgress = opponentProgress;
        this.endGameState = endGameState;
    }
}
exports.UpdatedAnswerKnowledge = UpdatedAnswerKnowledge;
function IsGameOver(knowledge) {
    return knowledge.endGameState !== null;
}
exports.IsGameOver = IsGameOver;
function GameOverState(knowledge) {
    return (0, EndGameState_1.GetEndGameState)(knowledge.endGameState);
}
exports.GameOverState = GameOverState;
class GuessLocked {
    constructor(index) {
        this.index = index;
    }
}
exports.GuessLocked = GuessLocked;
class LockedGuess {
    constructor(guess) {
        this.guess = guess;
    }
}
exports.LockedGuess = LockedGuess;
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["None"] = 0] = "None";
    ErrorType[ErrorType["TooShort"] = 1] = "TooShort";
    ErrorType[ErrorType["NotValidWord"] = 2] = "NotValidWord";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
class LockedGuessError {
    constructor(type, wordIndex, wordLength) {
        this.type = type;
        this.wordIndex = wordIndex;
        this.wordLength = wordLength;
    }
}
exports.LockedGuessError = LockedGuessError;
//# sourceMappingURL=Updates.js.map

/***/ }),

/***/ 2803:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToWord = void 0;
function assertValidWord(input) { }
function ToWord(s) {
    s = s.toUpperCase();
    assertValidWord(s);
    return s;
}
exports.ToWord = ToWord;
//# sourceMappingURL=Word.js.map

/***/ }),

/***/ 2967:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// https://stackoverflow.com/questions/61295715/typedef-equivalent-for-typescript
// https://evertpot.com/opaque-ts-types/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenerateLobbyId = exports.GenerateLobbyLink = exports.FindLobbyIdInURL = void 0;
const LOBBY_ID_QUERY_NAME = 'lobbyId';
function assertValidLobbyId(input) { }
function FindLobbyIdInURL() {
    const lobbyId = new URLSearchParams(window.location.search).get(LOBBY_ID_QUERY_NAME);
    if (!lobbyId) {
        return null;
    }
    assertValidLobbyId(lobbyId);
    return lobbyId;
}
exports.FindLobbyIdInURL = FindLobbyIdInURL;
function GenerateLobbyLink(lobbyId) {
    const url = new URLSearchParams(window.location.search);
    while (url.has(LOBBY_ID_QUERY_NAME)) {
        url.delete(LOBBY_ID_QUERY_NAME);
    }
    url.append(LOBBY_ID_QUERY_NAME, lobbyId);
    return `${window.location.href.split('?')[0]}?${url.toString()}`;
}
exports.GenerateLobbyLink = GenerateLobbyLink;
function GenerateLobbyId(socket) {
    const lobbyId = socket.data.playerId;
    assertValidLobbyId(lobbyId);
    return lobbyId;
}
exports.GenerateLobbyId = GenerateLobbyId;
//# sourceMappingURL=LobbyId.js.map

/***/ }),

/***/ 6079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LobbyManager = void 0;
const PlayerState_1 = __webpack_require__(1265);
const ClientGame_1 = __webpack_require__(9740);
const LoadingState_1 = __webpack_require__(3109);
const RematchState_1 = __webpack_require__(3180);
class LobbyManager extends PlayerState_1.PlayerState {
    constructor(endState = null) {
        super();
        this.endState = endState;
        this.state = null;
    }
    Exit() {
        if (this.state) {
            return this.state.Exit();
        }
        else {
            return Promise.resolve();
        }
    }
    Register(socket) {
        socket.on('GameReady', () => {
            this.GameReady();
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('GameReady');
    }
    SetState(nextState) {
        this.state = nextState;
    }
    Enter() {
        if (this.endState !== null) {
            this.state = new RematchState_1.RematchState(this.endState);
        }
        else {
            this.state = new LoadingState_1.LoadingState();
        }
        this.state.Initialize(this.socket, (nextState) => this.SetState(nextState));
    }
    GameReady() {
        this.SwitchState(new ClientGame_1.ClientGame());
    }
}
exports.LobbyManager = LobbyManager;
//# sourceMappingURL=LobbyManager.js.map

/***/ }),

/***/ 3618:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modal = void 0;
const Animate_1 = __webpack_require__(6447);
class Modal {
    constructor() {
        this.elements = [];
        this.popup = null;
        const root = document.getElementById('lobby');
        const background = this.AddRootDiv(root, 'background');
        this.base = this.AddRootDiv(background, 'modal');
    }
    Exit() {
        return Promise.resolve(this.elements.forEach(element => element.remove()));
    }
    AddButton(className, text, callback) {
        const button = document.createElement('button');
        button.className = className;
        button.innerText = text;
        button.onclick = callback;
        this.base.appendChild(button);
        this.elements.push(button);
        return button;
    }
    AddRootDiv(root, className, text = '') {
        const div = document.createElement('div');
        div.className = className;
        div.innerText = text;
        root.appendChild(div);
        this.elements.push(div);
        return div;
    }
    AddDiv(className, text = '') {
        return this.AddRootDiv(this.base, className, text);
    }
    AddPopup(target, text, durationSeconds = 1.5) {
        if (this.popup) {
            return;
        }
        this.popup = document.createElement('div');
        this.popup.className = 'popup';
        this.popup.innerText = text;
        target.appendChild(this.popup);
        this.elements.push(this.popup);
        (0, Animate_1.AnimateCSS)(this.popup, Animate_1.AnimationType.BounceIn, 0.5)
            .then(() => new Promise(resolve => setTimeout(resolve, 1000 * (durationSeconds - 1))))
            .then(() => {
            if (!this.popup) {
                return;
            }
            (0, Animate_1.AnimateCSS)(this.popup, Animate_1.AnimationType.FadeOut, 0.5);
            return new Promise(resolve => setTimeout(resolve, 450));
        })
            .finally(() => {
            if (!this.popup) {
                return;
            }
            if (this.elements.indexOf(this.popup) > -1) {
                this.elements.splice(this.elements.indexOf(this.popup));
            }
            this.popup.remove();
            this.popup = null;
        });
    }
}
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ 3109:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoadingState = void 0;
const PlayerState_1 = __webpack_require__(1265);
const LobbyId_1 = __webpack_require__(2967);
const MenuState_1 = __webpack_require__(2817);
const Modal_1 = __webpack_require__(3618);
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["LoadingMenu"] = 1] = "LoadingMenu";
    State[State["JoiningLobby"] = 2] = "JoiningLobby";
    State[State["LobbyNotFound"] = 3] = "LobbyNotFound";
})(State || (State = {}));
class LoadingState extends PlayerState_1.LobbyState {
    constructor() {
        super();
        this.modal = new LoadingModal();
        this.state = State.None;
    }
    Enter() {
        const lobbyId = (0, LobbyId_1.FindLobbyIdInURL)();
        if (lobbyId) {
            this.state = State.JoiningLobby;
            this.JoinLobby(lobbyId);
        }
        else {
            this.state = State.LoadingMenu;
            this.RequestLobbyId();
        }
    }
    Exit() {
        return this.modal.LoadingExit(this.state);
    }
    Register(socket) {
        socket.on('EnterMenu', (lobbyId) => {
            if (this.state === State.JoiningLobby) {
                this.state = State.LobbyNotFound;
            }
            this.EnterMenu(lobbyId);
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('EnterMenu');
    }
    EnterMenu(lobbyId) {
        this.SwitchState(new MenuState_1.MenuState(lobbyId));
    }
    RequestLobbyId() {
        var _a;
        this.modal.LoadingMenu();
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('RequestLobbyId');
    }
    JoinLobby(lobbyId) {
        var _a;
        this.modal.JoiningLobby();
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('JoinLobby', lobbyId);
    }
}
exports.LoadingState = LoadingState;
class LoadingModal extends Modal_1.Modal {
    constructor() {
        super();
        this.text = this.AddDiv('loading', 'Loading...');
    }
    LoadingExit(state) {
        return new Promise(resolve => {
            switch (state) {
                case State.LobbyNotFound:
                    this.LobbyNotFound();
                    break;
            }
            setTimeout(resolve, 1500);
        }).then(() => super.Exit());
    }
    LoadingMenu() {
        this.text.innerText = 'Loading main menu...';
    }
    JoiningLobby() {
        this.text.innerText = 'Trying to join existing lobby...';
    }
    LobbyNotFound() {
        this.text.innerText = 'Lobby not found. Entering menu...';
    }
    LobbyFound() {
        this.text.innerText = 'Lobby found. Entering menu...';
    }
}
//# sourceMappingURL=LoadingState.js.map

/***/ }),

/***/ 2817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuState = void 0;
const Popup_1 = __webpack_require__(6878);
const PlayerState_1 = __webpack_require__(1265);
const LobbyId_1 = __webpack_require__(2967);
const Modal_1 = __webpack_require__(3618);
class MenuState extends PlayerState_1.LobbyState {
    constructor(lobbyId) {
        super();
        this.lobbyId = lobbyId;
        this.modal = null;
    }
    Enter() {
        this.modal = new MenuModal(() => this.CopyLobbyLinkToClipboard(), () => this.Matchmake());
    }
    Exit() {
        return this.modal.Exit();
    }
    Register(socket) { }
    Deregister(socket) { }
    CopyLobbyLinkToClipboard() {
        const url = (0, LobbyId_1.GenerateLobbyLink)(this.lobbyId);
        this.fallbackCopyTextToClipboard(url);
    }
    Matchmake() {
        this.modal.EnterMatchmaking();
        this.socket.emit('FindMatch');
    }
    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        }
        catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }
}
exports.MenuState = MenuState;
class MenuModal extends Modal_1.Modal {
    constructor(hostLobby, matchmake) {
        super();
        this.AddDiv('explain-game', `In Passwordle, each player has a different password.

    The winner is the first to figure out their opponent's password.
    
    However, each guess gives clues to both players. For example:
    
    If your password is 'FLAME', and you guess 'FLEET', then your opponent will see that your password is 'FL___' and contains an 'E'.`);
        this.copyLinkButton = this.AddButton('private-game', 'Copy Link to Clipboard', () => {
            hostLobby();
            this.CopyLinkPopup();
        });
        this.matchmakingButton = this.AddButton('public-game', 'Join Random Game', () => matchmake());
    }
    Exit() {
        return Promise.resolve(this.EnteringMatch())
            .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
            .then(() => super.Exit());
    }
    EnteringMatch() {
        this.AddDiv('entering-match', 'Entering match. Good luck!');
    }
    CopyLinkPopup() {
        (0, Popup_1.AddPopup)(this.copyLinkButton, 'Link copied to clipboard!', 1.5);
    }
    EnterMatchmaking() {
        this.matchmakingButton.disabled = true;
        this.matchmakingButton.innerText = 'Looking for match...';
    }
}
//# sourceMappingURL=MenuState.js.map

/***/ }),

/***/ 3180:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RematchState = void 0;
const PlayerState_1 = __webpack_require__(1265);
const EndGameState_1 = __webpack_require__(2280);
const MenuState_1 = __webpack_require__(2817);
const Modal_1 = __webpack_require__(3618);
var State;
(function (State) {
    State[State["None"] = 0] = "None";
    State[State["RematchDeclined"] = 1] = "RematchDeclined";
    State[State["RematchRequested"] = 2] = "RematchRequested";
})(State || (State = {}));
class RematchState extends PlayerState_1.LobbyState {
    constructor(endState) {
        super();
        this.endState = endState;
        this.state = State.None;
        this.modal = new RematchModal(() => this.RequestRematch(), () => this.ReturnToMenu(), this.endState);
    }
    Enter() { }
    Exit() {
        return this.modal.RematchExit(this.state);
    }
    Register(socket) {
        socket.on('EnterMenu', (lobbyId) => {
            this.state = State.RematchDeclined;
            this.EnterMenu(lobbyId);
        });
    }
    Deregister(socket) {
        socket.removeAllListeners('EnterMenu');
    }
    RequestRematch() {
        var _a;
        this.state = State.RematchRequested;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('RequestRematch');
    }
    ReturnToMenu() {
        var _a;
        this.state = State.RematchDeclined;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('DeclineRematch');
    }
    EnterMenu(lobbyId) {
        this.SwitchState(new MenuState_1.MenuState(lobbyId));
    }
}
exports.RematchState = RematchState;
class RematchModal extends Modal_1.Modal {
    RematchExit(state) {
        return new Promise(resolve => {
            if (state === State.RematchDeclined) {
                resolve(this.RematchDeclined());
            }
            else {
                resolve(this.RematchAccepted());
            }
        })
            .then(() => new Promise(resolve => setTimeout(resolve, 1500)))
            .then(() => super.Exit());
    }
    RematchDeclined() {
        this.AddDiv('rematch-text', 'Rematch declined, returning to menu.');
    }
    RematchAccepted() {
        this.AddDiv('rematch-text', 'Rematch accepted. Good luck!');
    }
    constructor(requestRematch, returnToMenu, endState) {
        super();
        this.AddDiv('explain-game', `In Passwordle, each player has a different password.

    The winner is the first to figure out their opponent's password.
    
    However, each guess gives clues to both players. For example:
    
    If your password is 'FLAME', and you guess 'FLEET', then your opponent will see that your password is 'FL___' and contains an 'E'.`);
        this.AddButton('request-rematch', 'Request Rematch', requestRematch);
        this.AddButton('to-menu', 'Return to Menu', returnToMenu);
        let text;
        switch ((0, EndGameState_1.GetEndGameState)(endState)) {
            default:
                text = '';
                break;
            case EndGameState_1.EndGameState.Loss:
                text =
                    'You lost!\n' +
                        `Your password: ${endState.yourPassword}\n` +
                        `Your opponent's password: ${endState.opponentPassword}`;
                break;
            case EndGameState_1.EndGameState.Win:
                text =
                    'You won!\n' +
                        `Your password: ${endState.yourPassword}\n` +
                        `Your opponent's password: ${endState.opponentPassword}`;
                break;
            case EndGameState_1.EndGameState.Tie:
                text =
                    'You tied!\n' +
                        `Your password: ${endState.yourPassword}\n` +
                        `Your opponent's password: ${endState.opponentPassword}`;
                break;
        }
        this.AddDiv('match-outcome', text);
    }
}
//# sourceMappingURL=RematchState.js.map

/***/ }),

/***/ 5914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetSocket = void 0;
const socket_io_client_1 = __webpack_require__(7046);
function GetSocket() {
    let socket;
    if (window.location.href.includes('localhost')) {
        socket = (0, socket_io_client_1.io)('http://localhost:4000/', { transports: ['websocket'] });
    }
    else {
        socket = (0, socket_io_client_1.io)();
    }
    socket.onAny((...args) => {
        args.forEach(arg => {
            console.log(`Arg: ${arg}`);
        });
    });
    socket.on('connect', () => {
        console.log(`connected: ${socket.id}`);
    });
    socket.on('disconnect', () => {
        console.log(`disconnected: ${socket.id}`);
    });
    return socket;
}
exports.GetSocket = GetSocket;
//# sourceMappingURL=ClientNetworking.js.map

/***/ }),

/***/ 2428:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const ClientNetworking_1 = __webpack_require__(5914);
const StartState_1 = __webpack_require__(7712);
class Player {
    constructor() {
        this.socket = (0, ClientNetworking_1.GetSocket)();
        this.state = new StartState_1.StartState(this.socket, (nextState) => this.SetState(nextState));
    }
    SetState(nextState) {
        this.state = nextState;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map

/***/ }),

/***/ 1265:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LobbyState = exports.PlayerState = void 0;
class State {
    constructor() {
        this.socket = null;
        this.setState = null;
    }
    SwitchState(nextState) {
        this.Deregister(this.socket);
        this.Exit().then(() => {
            nextState.Initialize(this.socket, this.setState);
            this.setState(nextState);
        });
    }
    Initialize(socket, setState) {
        this.socket = socket;
        this.setState = setState;
        this.Register(socket);
        this.Enter();
    }
}
class PlayerState extends State {
}
exports.PlayerState = PlayerState;
class LobbyState extends State {
}
exports.LobbyState = LobbyState;
//# sourceMappingURL=PlayerState.js.map

/***/ }),

/***/ 7712:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StartState = void 0;
const LobbyManager_1 = __webpack_require__(6079);
const PlayerState_1 = __webpack_require__(1265);
class StartState extends PlayerState_1.PlayerState {
    Enter() { }
    Exit() {
        return Promise.resolve();
    }
    Register(socket) {
        socket.on('ServerReady', () => this.ServerReady());
    }
    Deregister(socket) {
        socket.removeAllListeners('ServerReady');
    }
    constructor(socket, setState) {
        super();
        this.Initialize(socket, setState);
        socket.emit('ClientReady');
    }
    ServerReady() {
        this.SwitchState(new LobbyManager_1.LobbyManager());
    }
}
exports.StartState = StartState;
//# sourceMappingURL=StartState.js.map

/***/ }),

/***/ 2280:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetEndGameState = exports.EndGameSummary = exports.EndGameState = void 0;
const TargetProgress_1 = __webpack_require__(6531);
var EndGameState;
(function (EndGameState) {
    EndGameState[EndGameState["None"] = 0] = "None";
    EndGameState[EndGameState["Win"] = 1] = "Win";
    EndGameState[EndGameState["Loss"] = 2] = "Loss";
    EndGameState[EndGameState["Tie"] = 3] = "Tie";
})(EndGameState = exports.EndGameState || (exports.EndGameState = {}));
class EndGameSummary {
    constructor(yourPassword, opponentPassword, yourProgress, opponentProgress) {
        this.yourPassword = yourPassword;
        this.opponentPassword = opponentPassword;
        this.yourProgress = yourProgress;
        this.opponentProgress = opponentProgress;
    }
}
exports.EndGameSummary = EndGameSummary;
function GetEndGameState(summary) {
    const playerComplete = (0, TargetProgress_1.Complete)(summary.yourProgress);
    const opponentComplete = (0, TargetProgress_1.Complete)(summary.opponentProgress);
    if (playerComplete === opponentComplete) {
        return EndGameState.Tie;
    }
    if (playerComplete) {
        return EndGameState.Win;
    }
    return EndGameState.Loss;
}
exports.GetEndGameState = GetEndGameState;
//# sourceMappingURL=EndGameState.js.map

/***/ }),

/***/ 3426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode)
/* harmony export */ });
/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}
var encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    }
    else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};
var decode = function (base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};


//# sourceMappingURL=base64-arraybuffer.es5.js.map


/***/ }),

/***/ 4802:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(804)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 804:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(810);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 810:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 3669:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(9231)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 9231:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(4241);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 4241:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 8419:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasCORS = void 0;
// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' &&
        'withCredentials' in new XMLHttpRequest();
}
catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
}
exports.hasCORS = value;


/***/ }),

/***/ 5754:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decode = exports.encode = void 0;
function encode(obj) {
    let str = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (str.length)
                str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
exports.encode = encode;
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}
exports.decode = decode;


/***/ }),

/***/ 5222:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parse = void 0;
// imported from https://github.com/galkn/parseuri
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];
function parse(str) {
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while (i--) {
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
exports.parse = parse;
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.substr(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.substr(path.length - 1, 1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}


/***/ }),

/***/ 8726:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// imported from https://github.com/unshiftio/yeast

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.yeast = exports.decode = exports.encode = void 0;
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {};
let seed = 0, i = 0, prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
    let encoded = '';
    do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
}
exports.encode = encode;
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
    let decoded = 0;
    for (i = 0; i < str.length; i++) {
        decoded = decoded * length + map[str.charAt(i)];
    }
    return decoded;
}
exports.decode = decode;
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
    const now = encode(+new Date());
    if (now !== prev)
        return seed = 0, prev = now;
    return now + '.' + encode(seed++);
}
exports.yeast = yeast;
//
// Map each character to its index.
//
for (; i < length; i++)
    map[alphabet[i]] = i;


/***/ }),

/***/ 6242:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = (() => {
    if (typeof self !== "undefined") {
        return self;
    }
    else if (typeof window !== "undefined") {
        return window;
    }
    else {
        return Function("return this")();
    }
})();


/***/ }),

/***/ 4679:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parse = exports.installTimerFunctions = exports.transports = exports.Transport = exports.protocol = exports.Socket = void 0;
const socket_js_1 = __webpack_require__(3481);
Object.defineProperty(exports, "Socket", ({ enumerable: true, get: function () { return socket_js_1.Socket; } }));
exports.protocol = socket_js_1.Socket.protocol;
var transport_js_1 = __webpack_require__(9870);
Object.defineProperty(exports, "Transport", ({ enumerable: true, get: function () { return transport_js_1.Transport; } }));
var index_js_1 = __webpack_require__(7385);
Object.defineProperty(exports, "transports", ({ enumerable: true, get: function () { return index_js_1.transports; } }));
var util_js_1 = __webpack_require__(9622);
Object.defineProperty(exports, "installTimerFunctions", ({ enumerable: true, get: function () { return util_js_1.installTimerFunctions; } }));
var parseuri_js_1 = __webpack_require__(5222);
Object.defineProperty(exports, "parse", ({ enumerable: true, get: function () { return parseuri_js_1.parse; } }));


/***/ }),

/***/ 3481:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Socket = void 0;
const index_js_1 = __webpack_require__(7385);
const util_js_1 = __webpack_require__(9622);
const parseqs_js_1 = __webpack_require__(5754);
const parseuri_js_1 = __webpack_require__(5222);
const debug_1 = __importDefault(__webpack_require__(4802)); // debug()
const component_emitter_1 = __webpack_require__(5260);
const engine_io_parser_1 = __webpack_require__(1373);
const debug = (0, debug_1.default)("engine.io-client:socket"); // debug()
class Socket extends component_emitter_1.Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri or options
     * @param {Object} opts - options
     * @api public
     */
    constructor(uri, opts = {}) {
        super();
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = (0, parseuri_js_1.parse)(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query)
                opts.query = uri.query;
        }
        else if (opts.host) {
            opts.hostname = (0, parseuri_js_1.parse)(opts.host).host;
        }
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = opts.transports || ["polling", "websocket"];
        this.readyState = "";
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: true
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
        if (typeof this.opts.query === "string") {
            this.opts.query = (0, parseqs_js_1.decode)(this.opts.query);
        }
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                addEventListener("beforeunload", () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                }, false);
            }
            if (this.hostname !== "localhost") {
                this.offlineEventListener = () => {
                    this.onClose("transport close", {
                        description: "network connection lost"
                    });
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} transport name
     * @return {Transport}
     * @api private
     */
    createTransport(name) {
        debug('creating transport "%s"', name);
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = engine_io_parser_1.protocol;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        });
        debug("options: %j", opts);
        return new index_js_1.transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */
    open() {
        let transport;
        if (this.opts.rememberUpgrade &&
            Socket.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1) {
            transport = "websocket";
        }
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        else {
            transport = this.transports[0];
        }
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        }
        catch (e) {
            debug("error while creating transport: %s", e);
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */
    setTransport(transport) {
        debug("setting transport %s", transport.name);
        if (this.transport) {
            debug("clearing existing transport %s", this.transport.name);
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this.onDrain.bind(this))
            .on("packet", this.onPacket.bind(this))
            .on("error", this.onError.bind(this))
            .on("close", reason => this.onClose("transport close", reason));
    }
    /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */
    probe(name) {
        debug('probing transport "%s"', name);
        let transport = this.createTransport(name);
        let failed = false;
        Socket.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            debug('probe transport "%s" opened', name);
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", msg => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    debug('probe transport "%s" pong', name);
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
                    debug('pausing current transport "%s"', this.transport.name);
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        debug("changing transport and sending upgrade packet");
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    debug('probe transport "%s" failed', name);
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = err => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            debug('probe transport "%s" failed because of error: %s', name, err);
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                debug('"%s" works - aborting "%s"', to.name, transport.name);
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @api private
     */
    onOpen() {
        debug("socket open");
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState &&
            this.opts.upgrade &&
            this.transport.pause) {
            debug("starting upgrade probes");
            let i = 0;
            const l = this.upgrades.length;
            for (; i < l; i++) {
                this.probe(this.upgrades[i]);
            }
        }
    }
    /**
     * Handles a packet.
     *
     * @api private
     */
    onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.resetPingTimeout();
                    this.sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
        else {
            debug('packet received with socket readyState "%s"', this.readyState);
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @api private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @api private
     */
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @api private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            const packets = this.getWritablePackets();
            debug("flushing %d packets in socket", packets.length);
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    getWritablePackets() {
        const shouldCheckPayloadSize = this.maxPayload &&
            this.transport.name === "polling" &&
            this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += (0, util_js_1.byteLength)(data);
            }
            if (i > 0 && payloadSize > this.maxPayload) {
                debug("only send %d out of %d packets", i, this.writeBuffer.length);
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        debug("payload size is %d (max: %d)", payloadSize, this.maxPayload);
        return this.writeBuffer;
    }
    /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */
    write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */
    sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     *
     * @api public
     */
    close() {
        const close = () => {
            this.onClose("forced close");
            debug("socket closing - telling transport to close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @api private
     */
    onError(err) {
        debug("socket error %j", err);
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @api private
     */
    onClose(reason, description) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            debug('socket close with reason: "%s"', reason);
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") {
                removeEventListener("offline", this.offlineEventListener, false);
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */
    filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for (; i < j; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
exports.Socket = Socket;
Socket.protocol = engine_io_parser_1.protocol;


/***/ }),

/***/ 9870:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transport = void 0;
const engine_io_parser_1 = __webpack_require__(1373);
const component_emitter_1 = __webpack_require__(5260);
const util_js_1 = __webpack_require__(9622);
const debug_1 = __importDefault(__webpack_require__(4802)); // debug()
const debug = (0, debug_1.default)("engine.io-client:transport"); // debug()
class TransportError extends Error {
    constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends component_emitter_1.Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */
    constructor(opts) {
        super();
        this.writable = false;
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.readyState = "";
        this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @api protected
     */
    onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     *
     * @api public
     */
    open() {
        if ("closed" === this.readyState || "" === this.readyState) {
            this.readyState = "opening";
            this.doOpen();
        }
        return this;
    }
    /**
     * Closes the transport.
     *
     * @api public
     */
    close() {
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api public
     */
    send(packets) {
        if ("open" === this.readyState) {
            this.write(packets);
        }
        else {
            // this might happen if the transport was silently closed in the beforeunload event handler
            debug("transport is not open, discarding packets");
        }
    }
    /**
     * Called upon open
     *
     * @api protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @api protected
     */
    onData(data) {
        const packet = (0, engine_io_parser_1.decodePacket)(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @api protected
     */
    onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @api protected
     */
    onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
}
exports.Transport = Transport;


/***/ }),

/***/ 7385:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transports = void 0;
const polling_js_1 = __webpack_require__(484);
const websocket_js_1 = __webpack_require__(1308);
exports.transports = {
    websocket: websocket_js_1.WS,
    polling: polling_js_1.Polling
};


/***/ }),

/***/ 484:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Request = exports.Polling = void 0;
const transport_js_1 = __webpack_require__(9870);
const debug_1 = __importDefault(__webpack_require__(4802)); // debug()
const yeast_js_1 = __webpack_require__(8726);
const parseqs_js_1 = __webpack_require__(5754);
const engine_io_parser_1 = __webpack_require__(1373);
const xmlhttprequest_js_1 = __importDefault(__webpack_require__(6666));
const component_emitter_1 = __webpack_require__(5260);
const util_js_1 = __webpack_require__(9622);
const globalThis_js_1 = __importDefault(__webpack_require__(6242));
const debug = (0, debug_1.default)("engine.io-client:polling"); // debug()
function empty() { }
const hasXHR2 = (function () {
    const xhr = new xmlhttprequest_js_1.default({
        xdomain: false
    });
    return null != xhr.responseType;
})();
class Polling extends transport_js_1.Transport {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */
    constructor(opts) {
        super(opts);
        this.polling = false;
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd =
                (typeof location !== "undefined" &&
                    opts.hostname !== location.hostname) ||
                    port !== opts.port;
            this.xs = opts.secure !== isSSL;
        }
        /**
         * XHR supports binary
         */
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    /**
     * Transport name.
     */
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */
    doOpen() {
        this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            debug("paused");
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                debug("we are currently polling - waiting to pause");
                total++;
                this.once("pollComplete", function () {
                    debug("pre-pause polling complete");
                    --total || pause();
                });
            }
            if (!this.writable) {
                debug("we are currently writing - waiting to pause");
                total++;
                this.once("drain", function () {
                    debug("pre-pause writing complete");
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @api public
     */
    poll() {
        debug("polling");
        this.polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @api private
     */
    onData(data) {
        debug("polling got data %s", data);
        const callback = packet => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({ description: "transport closed by the server" });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        (0, engine_io_parser_1.decodePayload)(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this.poll();
            }
            else {
                debug('ignoring poll - transport state "%s"', this.readyState);
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @api private
     */
    doClose() {
        const close = () => {
            debug("writing close packet");
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            debug("transport open - closing");
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            debug("transport not open - deferring close");
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */
    write(packets) {
        this.writable = false;
        (0, engine_io_parser_1.encodePayload)(packets, data => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */
    uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, yeast_js_1.yeast)();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        // avoid port if default for schema
        if (this.opts.port &&
            (("https" === schema && Number(this.opts.port) !== 443) ||
                ("http" === schema && Number(this.opts.port) !== 80))) {
            port = ":" + this.opts.port;
        }
        const encodedQuery = (0, parseqs_js_1.encode)(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return (schema +
            "://" +
            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            port +
            this.opts.path +
            (encodedQuery.length ? "?" + encodedQuery : ""));
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @api private
     */
    request(opts = {}) {
        Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
        return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */
    doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @api private
     */
    doPoll() {
        debug("xhr poll");
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
exports.Polling = Polling;
class Request extends component_emitter_1.Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */
    constructor(uri, opts) {
        super();
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.async = false !== opts.async;
        this.data = undefined !== opts.data ? opts.data : null;
        this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */
    create() {
        const opts = (0, util_js_1.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        const xhr = (this.xhr = new xmlhttprequest_js_1.default(opts));
        try {
            debug("xhr open %s: %s", this.method, this.uri);
            xhr.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (let i in this.opts.extraHeaders) {
                        if (this.opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                        }
                    }
                }
            }
            catch (e) { }
            if ("POST" === this.method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                }
                catch (e) { }
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            }
            catch (e) { }
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this.opts.withCredentials;
            }
            if (this.opts.requestTimeout) {
                xhr.timeout = this.opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
                if (4 !== xhr.readyState)
                    return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this.onLoad();
                }
                else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(() => {
                        this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            debug("xhr data %s", this.data);
            xhr.send(this.data);
        }
        catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(() => {
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @api private
     */
    onError(err) {
        this.emitReserved("error", err, this.xhr);
        this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @api private
     */
    cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) {
            return;
        }
        this.xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this.xhr.abort();
            }
            catch (e) { }
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this.index];
        }
        this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @api private
     */
    onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this.cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @api public
     */
    abort() {
        this.cleanup();
    }
}
exports.Request = Request;
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    }
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThis_js_1.default ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}


/***/ }),

/***/ 5552:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultBinaryType = exports.usingBrowserWebSocket = exports.WebSocket = exports.nextTick = void 0;
const globalThis_js_1 = __importDefault(__webpack_require__(6242));
exports.nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
        return cb => Promise.resolve().then(cb);
    }
    else {
        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
})();
exports.WebSocket = globalThis_js_1.default.WebSocket || globalThis_js_1.default.MozWebSocket;
exports.usingBrowserWebSocket = true;
exports.defaultBinaryType = "arraybuffer";


/***/ }),

/***/ 1308:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WS = void 0;
const transport_js_1 = __webpack_require__(9870);
const parseqs_js_1 = __webpack_require__(5754);
const yeast_js_1 = __webpack_require__(8726);
const util_js_1 = __webpack_require__(9622);
const websocket_constructor_js_1 = __webpack_require__(5552);
const debug_1 = __importDefault(__webpack_require__(4802)); // debug()
const engine_io_parser_1 = __webpack_require__(1373);
const debug = (0, debug_1.default)("engine.io-client:websocket"); // debug()
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product.toLowerCase() === "reactnative";
class WS extends transport_js_1.Transport {
    /**
     * WebSocket transport constructor.
     *
     * @api {Object} connection options
     * @api public
     */
    constructor(opts) {
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Transport name.
     *
     * @api public
     */
    get name() {
        return "websocket";
    }
    /**
     * Opens socket.
     *
     * @api private
     */
    doOpen() {
        if (!this.check()) {
            // let probe timeout
            return;
        }
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative
            ? {}
            : (0, util_js_1.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws =
                websocket_constructor_js_1.usingBrowserWebSocket && !isReactNative
                    ? protocols
                        ? new websocket_constructor_js_1.WebSocket(uri, protocols)
                        : new websocket_constructor_js_1.WebSocket(uri)
                    : new websocket_constructor_js_1.WebSocket(uri, protocols, opts);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType || websocket_constructor_js_1.defaultBinaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @api private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = closeEvent => this.onClose({
            description: "websocket connection closed",
            context: closeEvent
        });
        this.ws.onmessage = ev => this.onData(ev.data);
        this.ws.onerror = e => this.onError("websocket error", e);
    }
    /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0, engine_io_parser_1.encodePacket)(packet, this.supportsBinary, data => {
                // always create a new object (GH-437)
                const opts = {};
                if (!websocket_constructor_js_1.usingBrowserWebSocket) {
                    if (packet.options) {
                        opts.compress = packet.options.compress;
                    }
                    if (this.opts.perMessageDeflate) {
                        const len = 
                        // @ts-ignore
                        "string" === typeof data ? Buffer.byteLength(data) : data.length;
                        if (len < this.opts.perMessageDeflate.threshold) {
                            opts.compress = false;
                        }
                    }
                }
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    if (websocket_constructor_js_1.usingBrowserWebSocket) {
                        // TypeError is thrown when passing the second argument on Safari
                        this.ws.send(data);
                    }
                    else {
                        this.ws.send(data, opts);
                    }
                }
                catch (e) {
                    debug("websocket closed before onclose event");
                }
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    (0, websocket_constructor_js_1.nextTick)(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    /**
     * Closes socket.
     *
     * @api private
     */
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */
    uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "wss" : "ws";
        let port = "";
        // avoid port if default for schema
        if (this.opts.port &&
            (("wss" === schema && Number(this.opts.port) !== 443) ||
                ("ws" === schema && Number(this.opts.port) !== 80))) {
            port = ":" + this.opts.port;
        }
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, yeast_js_1.yeast)();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        const encodedQuery = (0, parseqs_js_1.encode)(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return (schema +
            "://" +
            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            port +
            this.opts.path +
            (encodedQuery.length ? "?" + encodedQuery : ""));
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */
    check() {
        return (!!websocket_constructor_js_1.WebSocket &&
            !("__initialize" in websocket_constructor_js_1.WebSocket && this.name === WS.prototype.name));
    }
}
exports.WS = WS;


/***/ }),

/***/ 6666:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// browser shim for xmlhttprequest module
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const has_cors_js_1 = __webpack_require__(8419);
const globalThis_js_1 = __importDefault(__webpack_require__(6242));
function default_1(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || has_cors_js_1.hasCORS)) {
            return new XMLHttpRequest();
        }
    }
    catch (e) { }
    if (!xdomain) {
        try {
            return new globalThis_js_1.default[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        }
        catch (e) { }
    }
}
exports["default"] = default_1;


/***/ }),

/***/ 9622:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.byteLength = exports.installTimerFunctions = exports.pick = void 0;
const globalThis_js_1 = __importDefault(__webpack_require__(6242));
function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
exports.pick = pick;
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis_js_1.default);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis_js_1.default);
    }
    else {
        obj.setTimeoutFn = setTimeout.bind(globalThis_js_1.default);
        obj.clearTimeoutFn = clearTimeout.bind(globalThis_js_1.default);
    }
}
exports.installTimerFunctions = installTimerFunctions;
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
exports.byteLength = byteLength;
function utf8Length(str) {
    let c = 0, length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}


/***/ }),

/***/ 3087:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERROR_PACKET = exports.PACKET_TYPES_REVERSE = exports.PACKET_TYPES = void 0;
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
exports.PACKET_TYPES = PACKET_TYPES;
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
exports.PACKET_TYPES_REVERSE = PACKET_TYPES_REVERSE;
Object.keys(PACKET_TYPES).forEach(key => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };
exports.ERROR_PACKET = ERROR_PACKET;


/***/ }),

/***/ 7572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const commons_js_1 = __webpack_require__(3087);
const base64_arraybuffer_1 = __webpack_require__(3426);
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
    }
    const packetType = commons_js_1.PACKET_TYPES_REVERSE[type];
    if (!packetType) {
        return commons_js_1.ERROR_PACKET;
    }
    return encodedPacket.length > 1
        ? {
            type: commons_js_1.PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1)
        }
        : {
            type: commons_js_1.PACKET_TYPES_REVERSE[type]
        };
};
const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer) {
        const decoded = (0, base64_arraybuffer_1.decode)(data);
        return mapBinary(decoded, binaryType);
    }
    else {
        return { base64: true, data }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType) => {
    switch (binaryType) {
        case "blob":
            return data instanceof ArrayBuffer ? new Blob([data]) : data;
        case "arraybuffer":
        default:
            return data; // assuming the data is already an ArrayBuffer
    }
};
exports["default"] = decodePacket;


/***/ }),

/***/ 3908:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const commons_js_1 = __webpack_require__(3087);
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = obj => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(data, callback);
        }
    }
    else if (withNativeArrayBuffer &&
        (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(new Blob([data]), callback);
        }
    }
    // plain string
    return callback(commons_js_1.PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
        const content = fileReader.result.split(",")[1];
        callback("b" + content);
    };
    return fileReader.readAsDataURL(data);
};
exports["default"] = encodePacket;


/***/ }),

/***/ 1373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodePayload = exports.decodePacket = exports.encodePayload = exports.encodePacket = exports.protocol = void 0;
const encodePacket_js_1 = __webpack_require__(3908);
exports.encodePacket = encodePacket_js_1.default;
const decodePacket_js_1 = __webpack_require__(7572);
exports.decodePacket = decodePacket_js_1.default;
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        (0, encodePacket_js_1.default)(packet, false, encodedPacket => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
exports.encodePayload = encodePayload;
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = (0, decodePacket_js_1.default)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
exports.decodePayload = decodePayload;
exports.protocol = 4;


/***/ }),

/***/ 5159:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Backoff = void 0;
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
exports.Backoff = Backoff;
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
};


/***/ }),

/***/ 7046:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = exports.connect = exports.io = exports.Socket = exports.Manager = exports.protocol = void 0;
const url_js_1 = __webpack_require__(3084);
const manager_js_1 = __webpack_require__(4168);
Object.defineProperty(exports, "Manager", ({ enumerable: true, get: function () { return manager_js_1.Manager; } }));
const socket_js_1 = __webpack_require__(8312);
Object.defineProperty(exports, "Socket", ({ enumerable: true, get: function () { return socket_js_1.Socket; } }));
const debug_1 = __importDefault(__webpack_require__(3669)); // debug()
const debug = debug_1.default("socket.io-client"); // debug()
/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = url_js_1.url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        debug("ignoring socket cache for %s", source);
        io = new manager_js_1.Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            debug("new io instance for %s", source);
            cache[id] = new manager_js_1.Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
exports.io = lookup;
exports.connect = lookup;
exports["default"] = lookup;
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: manager_js_1.Manager,
    Socket: socket_js_1.Socket,
    io: lookup,
    connect: lookup,
});
/**
 * Protocol version.
 *
 * @public
 */
var socket_io_parser_1 = __webpack_require__(7116);
Object.defineProperty(exports, "protocol", ({ enumerable: true, get: function () { return socket_io_parser_1.protocol; } }));

module.exports = lookup;


/***/ }),

/***/ 4168:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Manager = void 0;
const engine_io_client_1 = __webpack_require__(4679);
const socket_js_1 = __webpack_require__(8312);
const parser = __importStar(__webpack_require__(7116));
const on_js_1 = __webpack_require__(7149);
const backo2_js_1 = __webpack_require__(5159);
const component_emitter_1 = __webpack_require__(5260);
const debug_1 = __importDefault(__webpack_require__(3669)); // debug()
const debug = debug_1.default("socket.io-client:manager"); // debug()
class Manager extends component_emitter_1.Emitter {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        engine_io_client_1.installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new backo2_js_1.Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open"))
            return this;
        debug("opening %s", this.uri);
        this.engine = new engine_io_client_1.Socket(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on_js_1.on(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        // emit `error`
        const errorSub = on_js_1.on(socket, "error", (err) => {
            debug("error");
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                self.maybeReconnectOnOpen();
            }
        });
        if (false !== this._timeout) {
            const timeout = this._timeout;
            debug("connect attempt will timeout after %d", timeout);
            if (timeout === 0) {
                openSubDestroy(); // prevents a race condition with the 'open' event
            }
            // set timer
            const timer = this.setTimeoutFn(() => {
                debug("connect attempt timed out after %d", timeout);
                openSubDestroy();
                socket.close();
                // @ts-ignore
                socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        debug("open");
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on_js_1.on(socket, "ping", this.onping.bind(this)), on_js_1.on(socket, "data", this.ondata.bind(this)), on_js_1.on(socket, "error", this.onerror.bind(this)), on_js_1.on(socket, "close", this.onclose.bind(this)), on_js_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        debug("error", err);
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new socket_js_1.Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                debug("socket %s is still active, skipping close", nsp);
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        debug("writing packet %j", packet);
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        debug("cleanup");
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine)
            this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason, description) {
        debug("closed due to %s", reason);
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            debug("reconnect failed");
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            debug("will wait %dms before reconnect attempt", delay);
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                debug("attempting reconnect");
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        debug("reconnect attempt error");
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        debug("reconnect success");
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}
exports.Manager = Manager;


/***/ }),

/***/ 7149:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.on = void 0;
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}
exports.on = on;


/***/ }),

/***/ 8312:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Socket = void 0;
const socket_io_parser_1 = __webpack_require__(7116);
const on_js_1 = __webpack_require__(7149);
const component_emitter_1 = __webpack_require__(5260);
const debug_1 = __importDefault(__webpack_require__(3669)); // debug()
const debug = debug_1.default("socket.io-client:socket"); // debug()
/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
class Socket extends component_emitter_1.Emitter {
    /**
     * `Socket` constructor.
     *
     * @public
     */
    constructor(io, nsp, opts) {
        super();
        this.connected = false;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Whether the socket is currently disconnected
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            on_js_1.on(io, "open", this.onopen.bind(this)),
            on_js_1.on(io, "packet", this.onpacket.bind(this)),
            on_js_1.on(io, "error", this.onerror.bind(this)),
            on_js_1.on(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for connect()
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */
    emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev + '" is a reserved event name');
        }
        args.unshift(ev);
        const packet = {
            type: socket_io_parser_1.PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            debug("emitting packet with ack id %d", id);
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) {
            debug("discard packet as the transport is not currently writable");
        }
        else if (this.connected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        const timeout = this.flags.timeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    debug("removing packet with ack id %d from the buffer", id);
                    this.sendBuffer.splice(i, 1);
                }
            }
            debug("event with ack id %d has timed out after %d ms", id, timeout);
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, [null, ...args]);
        };
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        debug("transport is open - connecting");
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data });
            });
        }
        else {
            this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data: this.auth });
        }
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        debug("close (%s)", reason);
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case socket_io_parser_1.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    const id = packet.data.sid;
                    this.onconnect(id);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case socket_io_parser_1.PacketType.EVENT:
            case socket_io_parser_1.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.ACK:
            case socket_io_parser_1.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case socket_io_parser_1.PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (null != packet.id) {
            debug("attaching ack callback to event");
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            debug("sending ack %j", args);
            self.packet({
                type: socket_io_parser_1.PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            debug("calling ack %s with %j", packet.id, packet.data);
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        }
        else {
            debug("bad ack %s", packet.id);
        }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id) {
        debug("socket connected with id %s", id);
        this.id = id;
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */
    disconnect() {
        if (this.connected) {
            debug("performing disconnect (%s)", this.nsp);
            this.packet({ type: socket_io_parser_1.PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * ```
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     * ```
     *
     * @returns self
     * @public
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     *
     * <pre><code>
     *
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(event);
     * });
     *
     * </pre></code>
     *
     * @public
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     *
     * <pre><code>
     *
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(event);
     * });
     *
     * </pre></code>
     *
     * @public
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     *
     * <pre><code>
     *
     * const handler = (event, ...args) => {
     *   console.log(event);
     * }
     *
     * socket.onAnyOutgoing(handler);
     *
     * // then later
     * socket.offAnyOutgoing(handler);
     *
     * </pre></code>
     *
     * @public
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
}
exports.Socket = Socket;


/***/ }),

/***/ 3084:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.url = void 0;
const engine_io_client_1 = __webpack_require__(4679);
const debug_1 = __importDefault(__webpack_require__(3669)); // debug()
const debug = debug_1.default("socket.io-client:url"); // debug()
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            debug("protocol-less url %s", uri);
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        debug("parse %s", uri);
        obj = engine_io_client_1.parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}
exports.url = url;


/***/ }),

/***/ 3155:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reconstructPacket = exports.deconstructPacket = void 0;
const is_binary_js_1 = __webpack_require__(790);
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
exports.deconstructPacket = deconstructPacket;
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (is_binary_js_1.isBinary(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = undefined; // no longer useful
    return packet;
}
exports.reconstructPacket = reconstructPacket;
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder) {
        return buffers[data.num]; // appropriate buffer (should be natural order anyway)
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}


/***/ }),

/***/ 7116:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
const component_emitter_1 = __webpack_require__(5260);
const binary_js_1 = __webpack_require__(3155);
const is_binary_js_1 = __webpack_require__(790);
const debug_1 = __webpack_require__(3669); // debug()
const debug = debug_1.default("socket.io-parser"); // debug()
/**
 * Protocol version.
 *
 * @public
 */
exports.protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType = exports.PacketType || (exports.PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (is_binary_js_1.hasBinary(obj)) {
                obj.type =
                    obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK;
                return this.encodeAsBinary(obj);
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        debug("encoded %j as %s", obj, str);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = binary_js_1.deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
exports.Encoder = Encoder;
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends component_emitter_1.Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            packet = this.decodeString(obj);
            if (packet.type === PacketType.BINARY_EVENT ||
                packet.type === PacketType.BINARY_ACK) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if (is_binary_js_1.isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        debug("decoded %s as %j", str, p);
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return typeof payload === "object";
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object";
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
        }
    }
}
exports.Decoder = Decoder;
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = binary_js_1.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}


/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasBinary = exports.isBinary = void 0;
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
exports.isBinary = isBinary;
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}
exports.hasBinary = hasBinary;


/***/ }),

/***/ 5260:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Emitter": () => (/* binding */ Emitter)
/* harmony export */ });
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const Player_1 = __webpack_require__(2428);
const player = new Player_1.Player();
//# sourceMappingURL=app.js.map
})();

/******/ })()
;