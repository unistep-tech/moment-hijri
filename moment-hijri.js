// moment-hijri.js
// author: Suhail Alkowaileet
// This is a modified version of moment-jalaali by Behrang Noruzi Niya
// license: MIT

'use strict';

/************************************
    Expose Moment Hijri
************************************/
(function (root, factory) {
	/* global define */
	if (typeof define === 'function' && define.amd) {
		define(['moment'], function (moment) {
			root.moment = factory(moment)
			return root.moment
		})
	} else if (typeof exports === 'object') {
		module.exports = factory(require('moment'))
	} else {
		root.moment = factory(root.moment)
	}
})(this, function (moment) { // jshint ignore:line

	if (moment == null) {
		throw new Error('Cannot find moment')
	}

	/************************************
      Constants
  ************************************/

	var ummalqura = {
		ummalquraData: [28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931, 28960, 28990, 29019, 29049, 29078, 29108, 29137, 29167,
                      29196, 29226, 29255, 29285, 29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522, 29551, 29580, 29610, 29640, 29669, 29699, 29729, 29759,
                      29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994, 30023, 30053, 30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348,
                      30378, 30408, 30437, 30467, 30496, 30526, 30555, 30585, 30614, 30644, 30673, 30703, 30732, 30762, 30791, 30821, 30850, 30880, 30909, 30939,
                      30968, 30998, 31027, 31057, 31086, 31116, 31145, 31175, 31204, 31234, 31263, 31293, 31322, 31352, 31381, 31411, 31441, 31471, 31500, 31530,
                      31559, 31589, 31618, 31648, 31676, 31706, 31736, 31766, 31795, 31825, 31854, 31884, 31913, 31943, 31972, 32002, 32031, 32061, 32090, 32120,
                      32150, 32180, 32209, 32239, 32268, 32298, 32327, 32357, 32386, 32416, 32445, 32475, 32504, 32534, 32563, 32593, 32622, 32652, 32681, 32711,
                      32740, 32770, 32799, 32829, 32858, 32888, 32917, 32947, 32976, 33006, 33035, 33065, 33094, 33124, 33153, 33183, 33213, 33243, 33272, 33302,
                      33331, 33361, 33390, 33420, 33450, 33479, 33509, 33539, 33568, 33598, 33627, 33657, 33686, 33716, 33745, 33775, 33804, 33834, 33863, 33893,
                      33922, 33952, 33981, 34011, 34040, 34069, 34099, 34128, 34158, 34187, 34217, 34247, 34277, 34306, 34336, 34365, 34395, 34424, 34454, 34483,
                      34512, 34542, 34571, 34601, 34631, 34660, 34690, 34719, 34749, 34778, 34808, 34837, 34867, 34896, 34926, 34955, 34985, 35015, 35044, 35074,
                      35103, 35133, 35162, 35192, 35222, 35251, 35280, 35310, 35340, 35370, 35399, 35429, 35458, 35488, 35517, 35547, 35576, 35605, 35635, 35665,
                      35694, 35723, 35753, 35782, 35811, 35841, 35871, 35901, 35930, 35960, 35989, 36019, 36048, 36078, 36107, 36136, 36166, 36195, 36225, 36254,
                      36284, 36314, 36343, 36373, 36403, 36433, 36462, 36492, 36521, 36551, 36580, 36610, 36639, 36669, 36698, 36728, 36757, 36786, 36816, 36845,
                      36875, 36904, 36934, 36963, 36993, 37022, 37052, 37081, 37111, 37141, 37170, 37200, 37229, 37259, 37288, 37318, 37347, 37377, 37406, 37436,
                      37465, 37495, 37524, 37554, 37584, 37613, 37643, 37672, 37701, 37731, 37760, 37790, 37819, 37849, 37878, 37908, 37938, 37967, 37997, 38027,
                      38056, 38085, 38115, 38144, 38174, 38203, 38233, 38262, 38292, 38322, 38351, 38381, 38410, 38440, 38469, 38499, 38528, 38558, 38587, 38617,
                      38646, 38676, 38705, 38735, 38764, 38794, 38823, 38853, 38882, 38912, 38941, 38971, 39001, 39030, 39059, 39089, 39118, 39148, 39178, 39208,
                      39237, 39267, 39297, 39326, 39355, 39385, 39414, 39444, 39473, 39503, 39532, 39562, 39592, 39621, 39650, 39680, 39709, 39739, 39768, 39798,
                      39827, 39857, 39886, 39916, 39946, 39975, 40005, 40035, 40064, 40094, 40123, 40153, 40182, 40212, 40241, 40271, 40300, 40330, 40359, 40389,
                      40418, 40448, 40477, 40507, 40536, 40566, 40595, 40625, 40655, 40685, 40714, 40744, 40773, 40803, 40832, 40862, 40892, 40921, 40951, 40980,
                      41009, 41039, 41068, 41098, 41127, 41157, 41186, 41216, 41245, 41275, 41304, 41334, 41364, 41393, 41422, 41452, 41481, 41511, 41540, 41570,
                      41599, 41629, 41658, 41688, 41718, 41748, 41777, 41807, 41836, 41865, 41894, 41924, 41953, 41983, 42012, 42042, 42072, 42102, 42131, 42161,
                      42190, 42220, 42249, 42279, 42308, 42337, 42367, 42397, 42426, 42456, 42485, 42515, 42545, 42574, 42604, 42633, 42662, 42692, 42721, 42751,
                      42780, 42810, 42839, 42869, 42899, 42929, 42958, 42988, 43017, 43046, 43076, 43105, 43135, 43164, 43194, 43223, 43253, 43283, 43312, 43342,
                      43371, 43401, 43430, 43460, 43489, 43519, 43548, 43578, 43607, 43637, 43666, 43696, 43726, 43755, 43785, 43814, 43844, 43873, 43903, 43932,
                      43962, 43991, 44021, 44050, 44080, 44109, 44139, 44169, 44198, 44228, 44258, 44287, 44317, 44346, 44375, 44405, 44434, 44464, 44493, 44523,
                      44553, 44582, 44612, 44641, 44671, 44700, 44730, 44759, 44788, 44818, 44847, 44877, 44906, 44936, 44966, 44996, 45025, 45055, 45084, 45114,
                      45143, 45172, 45202, 45231, 45261, 45290, 45320, 45350, 45380, 45409, 45439, 45468, 45498, 45527, 45556, 45586, 45615, 45644, 45674, 45704,
                      45733, 45763, 45793, 45823, 45852, 45882, 45911, 45940, 45970, 45999, 46028, 46058, 46088, 46117, 46147, 46177, 46206, 46236, 46265, 46295,
                      46324, 46354, 46383, 46413, 46442, 46472, 46501, 46531, 46560, 46590, 46620, 46649, 46679, 46708, 46738, 46767, 46797, 46826, 46856, 46885,
                      46915, 46944, 46974, 47003, 47033, 47063, 47092, 47122, 47151, 47181, 47210, 47240, 47269, 47298, 47328, 47357, 47387, 47417, 47446, 47476,
                      47506, 47535, 47565, 47594, 47624, 47653, 47682, 47712, 47741, 47771, 47800, 47830, 47860, 47890, 47919, 47949, 47978, 48008, 48037, 48066,
                      48096, 48125, 48155, 48184, 48214, 48244, 48273, 48303, 48333, 48362, 48392, 48421, 48450, 48480, 48509, 48538, 48568, 48598, 48627, 48657,
                      48687, 48717, 48746, 48776, 48805, 48834, 48864, 48893, 48922, 48952, 48982, 49011, 49041, 49071, 49100, 49130, 49160, 49189, 49218, 49248,
                      49277, 49306, 49336, 49365, 49395, 49425, 49455, 49484, 49514, 49543, 49573, 49602, 49632, 49661, 49690, 49720, 49749, 49779, 49809, 49838,
                      49868, 49898, 49927, 49957, 49986, 50016, 50045, 50075, 50104, 50133, 50163, 50192, 50222, 50252, 50281, 50311, 50340, 50370, 50400, 50429,
                      50459, 50488, 50518, 50547, 50576, 50606, 50635, 50665, 50694, 50724, 50754, 50784, 50813, 50843, 50872, 50902, 50931, 50960, 50990, 51019,
                      51049, 51078, 51108, 51138, 51167, 51197, 51227, 51256, 51286, 51315, 51345, 51374, 51403, 51433, 51462, 51492, 51522, 51552, 51582, 51611,
                      51641, 51670, 51699, 51729, 51758, 51787, 51816, 51846, 51876, 51906, 51936, 51965, 51995, 52025, 52054, 52083, 52113, 52142, 52171, 52200,
                      52230, 52260, 52290, 52319, 52349, 52379, 52408, 52438, 52467, 52497, 52526, 52555, 52585, 52614, 52644, 52673, 52703, 52733, 52762, 52792,
                      52822, 52851, 52881, 52910, 52939, 52969, 52998, 53028, 53057, 53087, 53116, 53146, 53176, 53205, 53235, 53264, 53294, 53324, 53353, 53383,
                      53412, 53441, 53471, 53500, 53530, 53559, 53589, 53619, 53648, 53678, 53708, 53737, 53767, 53796, 53825, 53855, 53884, 53913, 53943, 53973,
                      54003, 54032, 54062, 54092, 54121, 54151, 54180, 54209, 54239, 54268, 54297, 54327, 54357, 54387, 54416, 54446, 54476, 54505, 54535, 54564,
                      54593, 54623, 54652, 54681, 54711, 54741, 54770, 54800, 54830, 54859, 54889, 54919, 54948, 54977, 55007, 55036, 55066, 55095, 55125, 55154,
                      55184, 55213, 55243, 55273, 55302, 55332, 55361, 55391, 55420, 55450, 55479, 55508, 55538, 55567, 55597, 55627, 55657, 55686, 55716, 55745,
                      55775, 55804, 55834, 55863, 55892, 55922, 55951, 55981, 56011, 56040, 56070, 56100, 56129, 56159, 56188, 56218, 56247, 56276, 56306, 56335,
                      56365, 56394, 56424, 56454, 56483, 56513, 56543, 56572, 56601, 56631, 56660, 56690, 56719, 56749, 56778, 56808, 56837, 56867, 56897, 56926,
                      56956, 56985, 57015, 57044, 57074, 57103, 57133, 57162, 57192, 57221, 57251, 57280, 57310, 57340, 57369, 57399, 57429, 57458, 57487, 57517,
                      57546, 57576, 57605, 57634, 57664, 57694, 57723, 57753, 57783, 57813, 57842, 57871, 57901, 57930, 57959, 57989, 58018, 58048, 58077, 58107,
                      58137, 58167, 58196, 58226, 58255, 58285, 58314, 58343, 58373, 58402, 58432, 58461, 58491, 58521, 58551, 58580, 58610, 58639, 58669, 58698,
                      58727, 58757, 58786, 58816, 58845, 58875, 58905, 58934, 58964, 58994, 59023, 59053, 59082, 59111, 59141, 59170, 59200, 59229, 59259, 59288,
                      59318, 59348, 59377, 59407, 59436, 59466, 59495, 59525, 59554, 59584, 59613, 59643, 59672, 59702, 59731, 59761, 59791, 59820, 59850, 59879,
                      59909, 59939, 59968, 59997, 60027, 60056, 60086, 60115, 60145, 60174, 60204, 60234, 60264, 60293, 60323, 60352, 60381, 60411, 60440, 60469,
                      60499, 60528, 60558, 60588, 60618, 60648, 60677, 60707, 60736, 60765, 60795, 60824, 60853, 60883, 60912, 60942, 60972, 61002, 61031, 61061,
                      61090, 61120, 61149, 61179, 61208, 61237, 61267, 61296, 61326, 61356, 61385, 61415, 61445, 61474, 61504, 61533, 61563, 61592, 61621, 61651,
                      61680, 61710, 61739, 61769, 61799, 61828, 61858, 61888, 61917, 61947, 61976, 62006, 62035, 62064, 62094, 62123, 62153, 62182, 62212, 62242,
                      62271, 62301, 62331, 62360, 62390, 62419, 62448, 62478, 62507, 62537, 62566, 62596, 62625, 62655, 62685, 62715, 62744, 62774, 62803, 62832,
                      62862, 62891, 62921, 62950, 62980, 63009, 63039, 63069, 63099, 63128, 63157, 63187, 63216, 63246, 63275, 63305, 63334, 63363, 63393, 63423,
                      63453, 63482, 63512, 63541, 63571, 63600, 63630, 63659, 63689, 63718, 63747, 63777, 63807, 63836, 63866, 63895, 63925, 63955, 63984, 64014,
                      64043, 64073, 64102, 64131, 64161, 64190, 64220, 64249, 64279, 64309, 64339, 64368, 64398, 64427, 64457, 64486, 64515, 64545, 64574, 64603,
                      64633, 64663, 64692, 64722, 64752, 64782, 64811, 64841, 64870, 64899, 64929, 64958, 64987, 65017, 65047, 65076, 65106, 65136, 65166, 65195,
                      65225, 65254, 65283, 65313, 65342, 65371, 65401, 65431, 65460, 65490, 65520, 65549, 65579, 65608, 65638, 65667, 65697, 65726, 65755, 65785,
                      65815, 65844, 65874, 65903, 65933, 65963, 65992, 66022, 66051, 66081, 66110, 66140, 66169, 66199, 66228, 66258, 66287, 66317, 66346, 66376,
                      66405, 66435, 66465, 66494, 66524, 66553, 66583, 66612, 66641, 66671, 66700, 66730, 66760, 66789, 66819, 66849, 66878, 66908, 66937, 66967,
                      66996, 67025, 67055, 67084, 67114, 67143, 67173, 67203, 67233, 67262, 67292, 67321, 67351, 67380, 67409, 67439, 67468, 67497, 67527, 67557,
                      67587, 67617, 67646, 67676, 67705, 67735, 67764, 67793, 67823, 67852, 67882, 67911, 67941, 67971, 68000, 68030, 68060, 68089, 68119, 68148,
                      68177, 68207, 68236, 68266, 68295, 68325, 68354, 68384, 68414, 68443, 68473, 68502, 68532, 68561, 68591, 68620, 68650, 68679, 68708, 68738,
                      68768, 68797, 68827, 68857, 68886, 68916, 68946, 68975, 69004, 69034, 69063, 69092, 69122, 69152, 69181, 69211, 69240, 69270, 69300, 69330,
                      69359, 69388, 69418, 69447, 69476, 69506, 69535, 69565, 69595, 69624, 69654, 69684, 69713, 69743, 69772, 69802, 69831, 69861, 69890, 69919,
                      69949, 69978, 70008, 70038, 70067, 70097, 70126, 70156, 70186, 70215, 70245, 70274, 70303, 70333, 70362, 70392, 70421, 70451, 70481, 70510,
                      70540, 70570, 70599, 70629, 70658, 70687, 70717, 70746, 70776, 70805, 70835, 70864, 70894, 70924, 70954, 70983, 71013, 71042, 71071, 71101,
                      71130, 71159, 71189, 71218, 71248, 71278, 71308, 71337, 71367, 71397, 71426, 71455, 71485, 71514, 71543, 71573, 71602, 71632, 71662, 71691,
                      71721, 71751, 71781, 71810, 71839, 71869, 71898, 71927, 71957, 71986, 72016, 72046, 72075, 72105, 72135, 72164, 72194, 72223, 72253, 72282,
                      72311, 72341, 72370, 72400, 72429, 72459, 72489, 72518, 72548, 72577, 72607, 72637, 72666, 72695, 72725, 72754, 72784, 72813, 72843, 72872,
                      72902, 72931, 72961, 72991, 73020, 73050, 73080, 73109, 73139, 73168, 73197, 73227, 73256, 73286, 73315, 73345, 73375, 73404, 73434, 73464,
                      73493, 73523, 73552, 73581, 73611, 73640, 73669, 73699, 73729, 73758, 73788, 73818, 73848, 73877, 73907, 73936, 73965, 73995, 74024, 74053,
                      74083, 74113, 74142, 74172, 74202, 74231, 74261, 74291, 74320, 74349, 74379, 74408, 74437, 74467, 74497, 74526, 74556, 74586, 74615, 74645,
                      74675, 74704, 74733, 74763, 74792, 74822, 74851, 74881, 74910, 74940, 74969, 74999, 75029, 75058, 75088, 75117, 75147, 75176, 75206, 75235,
                      75264, 75294, 75323, 75353, 75383, 75412, 75442, 75472, 75501, 75531, 75560, 75590, 75619, 75648, 75678, 75707, 75737, 75766, 75796, 75826,
                      75856, 75885, 75915, 75944, 75974, 76003, 76032, 76062, 76091, 76121, 76150, 76180, 76210, 76239, 76269, 76299, 76328, 76358, 76387, 76416,
                      76446, 76475, 76505, 76534, 76564, 76593, 76623, 76653, 76682, 76712, 76741, 76771, 76801, 76830, 76859, 76889, 76918, 76948, 76977, 77007,
                      77036, 77066, 77096, 77125, 77155, 77185, 77214, 77243, 77273, 77302, 77332, 77361, 77390, 77420, 77450, 77479, 77509, 77539, 77569, 77598,
                      77627, 77657, 77686, 77715, 77745, 77774, 77804, 77833, 77863, 77893, 77923, 77952, 77982, 78011, 78041, 78070, 78099, 78129, 78158, 78188,
                      78217, 78247, 78277, 78307, 78336, 78366, 78395, 78425, 78454, 78483, 78513, 78542, 78572, 78601, 78631, 78661, 78690, 78720, 78750, 78779,
                      78808, 78838, 78867, 78897, 78926, 78956, 78985, 79015, 79044, 79074, 79104, 79133, 79163, 79192, 79222, 79251, 79281, 79310, 79340, 79369,
                      79399, 79428, 79458, 79487, 79517, 79546, 79576, 79606, 79635, 79665, 79695, 79724, 79753, 79783, 79812, 79841, 79871, 79900, 79930, 79960,
                      79990]
	}

	var formattingTokens = /(\[[^\[]*\])|(\\)?h(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
		localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g

	, parseTokenOneOrTwoDigits = /\d\d?/, parseTokenOneToThreeDigits = /\d{1,3}/, parseTokenThreeDigits = /\d{3}/, parseTokenFourDigits = /\d{1,4}/, parseTokenSixDigits = /[+\-]?\d{1,6}/, parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, parseTokenT = /T/i, parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/

	, unitAliases = {
		hm: 'hmonth',
		hy: 'hyear'
	}

	, formatFunctions = {}

	, ordinalizeTokens = 'DDD w M D'.split(' '), paddedTokens = 'M D w'.split(' ')

	, formatTokenFunctions = {
		hM: function () {
			return this.hMonth() + 1
		},
		hMMM: function (format) {
			return this.localeData().hMonthsShort(this, format)
		},
		hMMMM: function (format) {
			return this.localeData().hMonths(this, format)
		},
		hD: function () {
			return this.hDate()
		},
		hDDD: function () {
			return this.hDayOfYear()
		},
		hw: function () {
			return this.hWeek()
		},
		hYY: function () {
			return leftZeroFill(this.hYear() % 100, 2)
		},
		hYYYY: function () {
			return leftZeroFill(this.hYear(), 4)
		},
		hYYYYY: function () {
			return leftZeroFill(this.hYear(), 5)
		},
		hgg: function () {
			return leftZeroFill(this.hWeekYear() % 100, 2)
		},
		hgggg: function () {
			return this.hWeekYear()
		},
		hggggg: function () {
			return leftZeroFill(this.hWeekYear(), 5)
		}
	}, i

	function padToken(func, count) {
		return function (a) {
			return leftZeroFill(func.call(this, a), count)
		}
	}

	function ordinalizeToken(func, period) {
		return function (a) {
			return this.localeData().ordinal(func.call(this, a), period)
		}
	}

	while (ordinalizeTokens.length) {
		i = ordinalizeTokens.pop()
		formatTokenFunctions['h' + i + 'o'] = ordinalizeToken(formatTokenFunctions['h' + i], i)
	}
	while (paddedTokens.length) {
		i = paddedTokens.pop()
		formatTokenFunctions['h' + i + i] = padToken(formatTokenFunctions['h' + i], 2)
	}
	formatTokenFunctions.hDDDD = padToken(formatTokenFunctions.hDDD, 3)

	/************************************
      Helpers
  ************************************/

	function extend(a, b) {
		var key
		for (key in b)
			if (b.hasOwnProperty(key))
				a[key] = b[key]
		return a
	}

	function leftZeroFill(number, targetLength) {
		var output = number + ''
		while (output.length < targetLength)
			output = '0' + output
		return output
	}

	function isArray(input) {
		return Object.prototype.toString.call(input) === '[object Array]'
	}

	function normalizeUnits(units) {
		return units ? unitAliases[units] || units.toLowerCase().replace(/(.)s$/, '$1') : units
	}

	function setDate(moment, year, month, date) {
		var utc = moment._isUTC ? 'UTC' : ''
		moment._d['set' + utc + 'FullYear'](year)
		moment._d['set' + utc + 'Month'](month)
		moment._d['set' + utc + 'Date'](date)
	}

	function objectCreate(parent) {
		function F() {}
		F.prototype = parent
		return new F()
	}

	function getPrototypeOf(object) {
		if (Object.getPrototypeOf)
			return Object.getPrototypeOf(object)
		else if (''.__proto__) // jshint ignore:line
			return object.__proto__ // jshint ignore:line
		else
			return object.constructor.prototype
	}

	/************************************
      Languages
  ************************************/
	extend(getPrototypeOf(moment.localeData()), {
		_hMonths: ['Muharram'
                , 'Safar'
                , 'Rabi\' al-Awwal'
                , 'Rabi\' al-Thani'
                , 'Jumada al-Ula'
                , 'Jumada al-Alkhirah'
                , 'Rajab'
                , 'Sha’ban'
                , 'Ramadhan'
                , 'Shawwal'
                , 'Thul-Qi’dah'
                , 'Thul-Hijjah'
                ],
		hMonths: function (m) {
			return this._hMonths[m.hMonth()]
		}

		,
		_hMonthsShort: ['Muh'
                      , 'Saf'
                      , 'Rab-I'
                      , 'Rab-II'
                      , 'Jum-I'
                      , 'Jum-II'
                      , 'Raj'
                      , 'Sha'
                      , 'Ram'
                      , 'Shw'
                      , 'Dhu-Q'
                      , 'Dhu-H'
                      ],
		hMonthsShort: function (m) {
			return this._hMonthsShort[m.hMonth()]
		}

		,
		hMonthsParse: function (monthName) {
			var i, mom, regex
			if (!this._hMonthsParse)
				this._hMonthsParse = []
			for (i = 0; i < 12; i += 1) {
				// Make the regex if we don't have it already.
				if (!this._hMonthsParse[i]) {
					mom = hMoment([2000, (2 + i) % 12, 25])
					regex = '^' + this.hMonths(mom, '') + '$|^' + this.hMonthsShort(mom, '') + '$'
					this._hMonthsParse[i] = new RegExp(regex.replace('.', ''), 'i')
				}
				// Test the regex.
				if (this._hMonthsParse[i].test(monthName))
					return i
			}
		}
	})

	var oldLocale = moment.locale();
	moment.defineLocale('ar-sa', {
		hMonths: 'محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الآخرة_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split('_'),
		hMonthsShort: 'محرم_صفر_ربيع ١_ربيع ٢_جمادى ١_جمادى ٢_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split('_')
	});
	moment.locale(oldLocale);
	
	/************************************
      Formatting
  ************************************/

	function makeFormatFunction(format) {
		var array = format.match(formattingTokens),
			length = array.length,
			i

		for (i = 0; i < length; i += 1)
			if (formatTokenFunctions[array[i]])
				array[i] = formatTokenFunctions[array[i]]

		return function (mom) {
			var output = ''
			for (i = 0; i < length; i += 1)
				output += array[i] instanceof Function ? '[' + array[i].call(mom, format) + ']' : array[i]
			return output
		}
	}

	/************************************
      Parsing
  ************************************/

	function getParseRegexForToken(token, config) {
		switch (token) {
		case 'hDDDD':
			return parseTokenThreeDigits
		case 'hYYYY':
			return parseTokenFourDigits
		case 'hYYYYY':
			return parseTokenSixDigits
		case 'hDDD':
			return parseTokenOneToThreeDigits
		case 'hMMM':
		case 'hMMMM':
			return parseTokenWord
		case 'hMM':
		case 'hDD':
		case 'hYY':
		case 'hM':
		case 'hD':
			return parseTokenOneOrTwoDigits
		case 'DDDD':
			return parseTokenThreeDigits
		case 'YYYY':
			return parseTokenFourDigits
		case 'YYYYY':
			return parseTokenSixDigits
		case 'S':
		case 'SS':
		case 'SSS':
		case 'DDD':
			return parseTokenOneToThreeDigits
		case 'MMM':
		case 'MMMM':
		case 'dd':
		case 'ddd':
		case 'dddd':
			return parseTokenWord
		case 'a':
		case 'A':
			return moment.localeData(config._l)._meridiemParse
		case 'X':
			return parseTokenTimestampMs
		case 'Z':
		case 'ZZ':
			return parseTokenTimezone
		case 'T':
			return parseTokenT
		case 'MM':
		case 'DD':
		case 'YY':
		case 'HH':
		case 'hh':
		case 'mm':
		case 'ss':
		case 'M':
		case 'D':
		case 'd':
		case 'H':
		case 'h':
		case 'm':
		case 's':
			return parseTokenOneOrTwoDigits
		default:
			return new RegExp(token.replace('\\', ''))
		}
	}

	function addTimeToArrayFromToken(token, input, config) {
		var a, datePartArray = config._a

		switch (token) {
		case 'hM':
		case 'hMM':
			datePartArray[1] = input == null ? 0 : ~~input - 1
			break
		case 'hMMM':
		case 'hMMMM':
			a = moment.localeData(config._l).hMonthsParse(input)
			if (a != null)
				datePartArray[1] = a
			else
				config._isValid = false
			break
		case 'hD':
		case 'hDD':
		case 'hDDD':
		case 'hDDDD':
			if (input != null)
				datePartArray[2] = ~~input
			break
		case 'hYY':
			datePartArray[0] = ~~input + (~~input > 47 ? 1300 : 1400)
			break
		case 'hYYYY':
		case 'hYYYYY':
			datePartArray[0] = ~~input
		}
		if (input == null)
			config._isValid = false
	}

	function dateFromArray(config) {
		var g, h, hy = config._a[0],
			hm = config._a[1],
			hd = config._a[2]

		if ((hy == null) && (hm == null) && (hd == null))
			return [0, 0, 1]
		hy = hy || 0
		hm = hm || 0
		hd = hd || 1
		if (hd < 1 || hd > hMoment.hDaysInMonth(hy, hm))
			config._isValid = false
		g = toGregorian(hy, hm, hd)
		h = toHijri(g.gy, g.gm, g.gd)
		config._hDiff = 0
		if (~~h.hy !== hy)
			config._hDiff += 1
		if (~~h.hm !== hm)
			config._hDiff += 1
		if (~~h.hd !== hd)
			config._hDiff += 1
		return [g.gy, g.gm, g.gd]
	}

	function makeDateFromStringAndFormat(config) {
		var tokens = config._f.match(formattingTokens),
			string = config._i,
			len = tokens.length,
			i, token, parsedInput

		config._a = []

		for (i = 0; i < len; i += 1) {
			token = tokens[i]
			parsedInput = (getParseRegexForToken(token, config).exec(string) || [])[0];
			if (parsedInput)
				string = string.slice(string.indexOf(parsedInput) + parsedInput.length)
			if (formatTokenFunctions[token])
				addTimeToArrayFromToken(token, parsedInput, config)
		}
		if (string)
			config._il = string

		return dateFromArray(config)
	}

	function makeDateFromStringAndArray(config, utc) {
		var len = config._f.length
		, i
		, format
		, tempMoment
		, bestMoment
		, currentScore
		, scoreToBeat

		if (len === 0) {
			return makeMoment(new Date(NaN))
		}

		for (i = 0; i < len; i += 1) {
			format = config._f[i]
			currentScore = 0
			tempMoment = makeMoment(config._i, format, config._l, utc)

			if (!tempMoment.isValid()) continue

			currentScore += tempMoment._hDiff
			if (tempMoment._il)
				currentScore += tempMoment._il.length
			if (scoreToBeat == null || currentScore < scoreToBeat) {
				scoreToBeat = currentScore
				bestMoment = tempMoment
			}
		}

		return bestMoment
	}
	
	function removeParsedTokens(config) {
		var string = config._i,
			input = '',
			format = '',
			array = config._f.match(formattingTokens),
			len = array.length,
			i, match, parsed

		for (i = 0; i < len; i += 1) {
			match = array[i]
			parsed = (getParseRegexForToken(match, config).exec(string) || [])[0]
			if (parsed)
				string = string.slice(string.indexOf(parsed) + parsed.length)
			if (!(formatTokenFunctions[match] instanceof Function)) {
				format += match
				if (parsed)
					input += parsed
			}
		}
		config._i = input
		config._f = format
	}

	/************************************
      Week of Year
  ************************************/

	function hWeekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
		var end = firstDayOfWeekOfYear - firstDayOfWeek,
			daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
			adjustedMoment

		if (daysToDayOfWeek > end) {
			daysToDayOfWeek -= 7
		}
		if (daysToDayOfWeek < end - 7) {
			daysToDayOfWeek += 7
		}
		adjustedMoment = hMoment(mom).add(daysToDayOfWeek, 'd')
		return {
			week: Math.ceil(adjustedMoment.hDayOfYear() / 7),
			year: adjustedMoment.hYear()
		}
	}

	/************************************
      Top Level Functions
  ************************************/

	function makeMoment(input, format, lang, utc) {
		var config =
			{ _i: input
			, _f: format
			, _l: lang
			}
			, date
			, m
			, hm
		if (format) {
			if (isArray(format)) {
				return makeDateFromStringAndArray(config, utc)
			} else {
				date = makeDateFromStringAndFormat(config)
				removeParsedTokens(config)
				format = 'YYYY-MM-DD-' + config._f
				input = leftZeroFill(date[0], 4) + '-'
					+ leftZeroFill(date[1] + 1, 2) + '-'
					+ leftZeroFill(date[2], 2) + '-'
					+ config._i
			}
		}
		if (utc)
			m = moment.utc(input, format, lang)
		else
			m = moment(input, format, lang)
		if (config._isValid === false)
			m._isValid = false
		m._hDiff = config._hDiff || 0
		hm = objectCreate(hMoment.fn)
		extend(hm, m)
		return hm
	}

	function hMoment(input, format, lang) {
		return makeMoment(input, format, lang, false)
	}

	extend(hMoment, moment)
	hMoment.fn = objectCreate(moment.fn)

	hMoment.utc = function (input, format, lang) {
		return makeMoment(input, format, lang, true)
	}

	/************************************
      hMoment Prototype
  ************************************/

	hMoment.fn.format = function (format) {
		var i, replace, me = this

		if (format) {
			i = 5
			replace = function (input) {
				return me.localeData().longDateFormat(input) || input
			}
			while (i > 0 && localFormattingTokens.test(format)) {
				i -= 1
				format = format.replace(localFormattingTokens, replace)
			}
			if (!formatFunctions[format]) {
				formatFunctions[format] = makeFormatFunction(format)
			}
			format = formatFunctions[format](this)
		}
		return moment.fn.format.call(this, format)
	}

	hMoment.fn.hYear = function (input) {
		var lastDay, h, g
		if (typeof input === 'number') {
			h = toHijri(this.year(), this.month(), this.date())
			lastDay = Math.min(h.hd, hMoment.hDaysInMonth(input, h.hm))
			g = toGregorian(input, h.hm, lastDay)
			setDate(this, g.gy, g.gm, g.gd)
			moment.updateOffset(this)
			return this
		} else {
			return toHijri(this.year(), this.month(), this.date()).hy
		}
	}

	hMoment.fn.hMonth = function (input) {
		var lastDay, h, g
		if (input != null) {
			if (typeof input === 'string') {
				input = this.localeData().hMonthsParse(input)
				if (typeof input !== 'number')
					return this
			}
			h = toHijri(this.year(), this.month(), this.date())
			lastDay = Math.min(h.hd, hMoment.hDaysInMonth(h.hy, input))
			this.hYear(h.hy + div(input, 12))
			input = mod(input, 12)
			if (input < 0) {
				input += 12
				this.hYear(this.hYear() - 1)
			}
			g = toGregorian(this.hYear(), input, lastDay)
			setDate(this, g.gy, g.gm, g.gd)
			moment.updateOffset(this)
			return this
		} else {
			return toHijri(this.year(), this.month(), this.date()).hm
		}
	}

	hMoment.fn.hDate = function (input) {
		var h, g
		if (typeof input === 'number') {
			h = toHijri(this.year(), this.month(), this.date())
			g = toGregorian(h.hy, h.hm, input)
			setDate(this, g.gy, g.gm, g.gd)
			moment.updateOffset(this)
			return this
		} else {
			return toHijri(this.year(), this.month(), this.date()).hd
		}
	}

	hMoment.fn.hDayOfYear = function (input) {
		var dayOfYear = Math.round((hMoment(this).startOf('day') - hMoment(this).startOf('hYear')) / 864e5) + 1
		return input == null ? dayOfYear : this.add(input - dayOfYear, 'd')
	}

	hMoment.fn.hWeek = function (input) {
		var week = hWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).week
		return input == null ? week : this.add( (input - week) * 7, 'd')
	}

	hMoment.fn.hWeekYear = function (input) {
		var year = hWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year
		return input == null ? year : this.add(input - year, 'y')
	}

	hMoment.fn.add = function (val, units) {
		var temp
		if (units !== null && !isNaN(+units)) {
			temp = val
			val = units
			units = temp
		}
		units = normalizeUnits(units)
		if (units === 'hyear') {
			this.hYear(this.hYear() + val)
		} else if (units === 'hmonth') {
			this.hMonth(this.hMonth() + val)
		} else {
			moment.fn.add.call(this, val, units)
		}
		return this
	}

	hMoment.fn.subtract = function (val, units) {
		var temp
		if (units !== null && !isNaN(+units)) {
			temp = val
			val = units
			units = temp
		}
		units = normalizeUnits(units)
		if (units === 'hyear') {
			this.hYear(this.hYear() - val)
		} else if (units === 'hmonth') {
			this.hMonth(this.hMonth() - val)
		} else {
			moment.fn.subtract.call(this, val, units)
		}
		return this
	}

	hMoment.fn.startOf = function (units) {
		units = normalizeUnits(units)
		if (units === 'hyear' || units === 'hmonth') {
			if (units === 'hyear') {
				this.hMonth(0)
			}
			this.hDate(1)
			this.hours(0)
			this.minutes(0)
			this.seconds(0)
			this.milliseconds(0)
			return this
		} else {
			return moment.fn.startOf.call(this, units)
		}
	}

	hMoment.fn.endOf = function (units) {
		units = normalizeUnits(units)
		if (units === undefined || units === 'milisecond') {
			return this
		}
		return this.startOf(units).add(1, (units === 'isoweek' ? 'week' : units)).subtract(1, 'milliseconds')
	}
	
	hMoment.fn.clone = function () {
		return hMoment(this)
	}

	hMoment.fn.hYears = hMoment.fn.hYear
	hMoment.fn.hMonths = hMoment.fn.hMonth
	hMoment.fn.hDates = hMoment.fn.hDate
	hMoment.fn.hWeeks = hMoment.fn.hWeek

	/************************************
      hMoment Statics
  ************************************/

	hMoment.hDaysInMonth = function (year, month) {
		var i = getNewMoonMJDNIndex(year, month + 1),
			daysInMonth = ummalqura.ummalquraData[i] - ummalqura.ummalquraData[i - 1]
		return daysInMonth
	}

	function toHijri(gy, gm, gd) {
		var h = d2h(g2d(gy, gm + 1, gd))
		h.hm -= 1
		return h
	}

	function toGregorian(hy, hm, hd) {
		var g = d2g(h2d(hy, hm + 1, hd))
		g.gm -= 1
		return g
	}

	hMoment.hConvert = {
		toHijri: toHijri,
		toGregorian: toGregorian
	}

	return hMoment

	/************************************
      Hijri Conversion
  ************************************/

	/*
    Utility helper functions.
  */

	function div(a, b) {
		return~~ (a / b)
	}

	function mod(a, b) {
		return a - ~~(a / b) * b
	}

	/*
    Converts a date of the Hijri calendar to the Julian Day number.

    @param hy Hijri year (1356 to 1500)
    @param hm Hijri month (1 to 12)
    @param hd Hijri day (1 to 29/30)
    @return Julian Day number
  */

	function h2d(hy, hm, hd) {
		var i = getNewMoonMJDNIndex(hy, hm),
			mjdn = hd + ummalqura.ummalquraData[i - 1] - 1,
			jdn = mjdn + 2400000;
		return jdn
	}

	/*
    Converts the Julian Day number to a date in the Hijri calendar.

    @param jdn Julian Day number
    @return
      hy: Hijri year (1356 to 1500)
      hm: Hijri month (1 to 12)
      hd: Hijri day (1 to 29/30)
  */

	function d2h(jdn) {
		var mjdn = jdn - 2400000,
			i = getNewMoonMJDNIndexByJDN(mjdn),
			totalMonths = i + 16260,
			cYears = Math.floor((totalMonths - 1) / 12),
			hy = cYears + 1,
			hm = totalMonths - 12 * cYears,
			hd = mjdn - ummalqura.ummalquraData[i - 1] + 1

		return {
			hy: hy,
			hm: hm,
			hd: hd
		}
	}

	/*
    Calculates the Julian Day number from Gregorian or Julian
    calendar dates. This integer number corresponds to the noon of
    the date (i.e. 12 hours of Universal Time).
    The procedure was tested to be good since 1 March, -100100 (of both
    calendars) up to a few million years into the future.

    @param gy Calendar year (years BC numbered 0, -1, -2, ...)
    @param gm Calendar month (1 to 12)
    @param gd Calendar day of the month (1 to 28/29/30/31)
    @return Julian Day number
  */

	function g2d(gy, gm, gd) {
		var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408
		d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752
		return d
	}

	/*
    Calculates Gregorian and Julian calendar dates from the Julian Day number
    (hdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
    calendars) to some millions years ahead of the present.

    @param jdn Julian Day number
    @return
      gy: Calendar year (years BC numbered 0, -1, -2, ...)
      gm: Calendar month (1 to 12)
      gd: Calendar day of the month M (1 to 28/29/30/31)
  */

	function d2g(jdn) {
		var j, i, gd, gm, gy
		j = 4 * jdn + 139361631
		j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908
		i = div(mod(j, 1461), 4) * 5 + 308
		gd = div(mod(i, 153), 5) + 1
		gm = mod(div(i, 153), 12) + 1
		gy = div(j, 1461) - 100100 + div(8 - gm, 6)
		return {
			gy: gy,
			gm: gm,
			gd: gd
		}
	}

	/*
    Returns the index of the modified Julian day number of the new moon
    by the given year and month

    @param hy: Hijri year (1356 to 1500)
    @param hm: Hijri month (1 to 12)
    @return
        i: the index of the new moon in modified Julian day number.
  */
	function getNewMoonMJDNIndex(hy, hm) {
		var cYears = hy - 1,
			totalMonths = (cYears * 12) + 1 + (hm - 1),
			i = totalMonths - 16260
		return i
	}

	/*
    Returns the nearest new moon 

    @param jdn Julian Day number
    @return
      i: the index of a modified Julian day number.
  */
	function getNewMoonMJDNIndexByJDN(mjdn) {
		for (var i = 0; i < ummalqura.ummalquraData.length; i=i+1) {
			if (ummalqura.ummalquraData[i] > mjdn)
				return i
		}
	}

})