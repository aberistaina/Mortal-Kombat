PGDMP     )                	    {           mortal_kombat    14.8    14.8     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    8205696    mortal_kombat    DATABASE     i   CREATE DATABASE mortal_kombat WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE mortal_kombat;
                postgres    false            �            1259    8206195 
   Personajes    TABLE     ]  CREATE TABLE public."Personajes" (
    id integer NOT NULL,
    nombre character varying(20) NOT NULL,
    reino character varying(20) NOT NULL,
    raza character varying(50) NOT NULL,
    apariciones character varying(255) NOT NULL,
    imagen character varying(255) NOT NULL,
    descripcion character varying(255) NOT NULL,
    historia text
);
     DROP TABLE public."Personajes";
       public         heap    postgres    false            �            1259    8206194    Personajes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Personajes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Personajes_id_seq";
       public          postgres    false    210            �           0    0    Personajes_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Personajes_id_seq" OWNED BY public."Personajes".id;
          public          postgres    false    209            �            1259    8206204    Usuarios    TABLE     �   CREATE TABLE public."Usuarios" (
    id integer NOT NULL,
    nombre character varying(20) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    admin boolean DEFAULT false NOT NULL
);
    DROP TABLE public."Usuarios";
       public         heap    postgres    false            �            1259    8206203    Usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Usuarios_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Usuarios_id_seq";
       public          postgres    false    212            �           0    0    Usuarios_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Usuarios_id_seq" OWNED BY public."Usuarios".id;
          public          postgres    false    211            a           2604    8206198    Personajes id    DEFAULT     r   ALTER TABLE ONLY public."Personajes" ALTER COLUMN id SET DEFAULT nextval('public."Personajes_id_seq"'::regclass);
 >   ALTER TABLE public."Personajes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            b           2604    8206207    Usuarios id    DEFAULT     n   ALTER TABLE ONLY public."Usuarios" ALTER COLUMN id SET DEFAULT nextval('public."Usuarios_id_seq"'::regclass);
 <   ALTER TABLE public."Usuarios" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            �          0    8206195 
   Personajes 
   TABLE DATA           k   COPY public."Personajes" (id, nombre, reino, raza, apariciones, imagen, descripcion, historia) FROM stdin;
    public          postgres    false    210   �       �          0    8206204    Usuarios 
   TABLE DATA           H   COPY public."Usuarios" (id, nombre, email, password, admin) FROM stdin;
    public          postgres    false    212   �3       �           0    0    Personajes_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Personajes_id_seq"', 13, true);
          public          postgres    false    209                        0    0    Usuarios_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Usuarios_id_seq"', 2, true);
          public          postgres    false    211            e           2606    8206202    Personajes Personajes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Personajes"
    ADD CONSTRAINT "Personajes_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Personajes" DROP CONSTRAINT "Personajes_pkey";
       public            postgres    false    210            g           2606    8206212    Usuarios Usuarios_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Usuarios" DROP CONSTRAINT "Usuarios_pkey";
       public            postgres    false    212            �      x��\˒Ǳ]��wW��`��,Y^I�DQ�tEz�P���(`j�����3��w����9�Y����/D��둕y�����+׹����qx�f}��u/���x�óˇ�ð￸��������.v�k^����:���Z�0W׾��W~���f�]�ߪ4`UǶ��7��|[5��V�������T�z~�b��]�����GL�n]����>�@����ֱ]���k�Gv��j�j|�M������m��*�Q�kҨ6�����};�ụ�QU��W;��K�׾��\S��;�:D��v����ؤ��}�;�mZz^�����z&2��>]V߻
�rI����X������s̉?��&v;��6p���������b��u�;�c����^�W?\s��Bo�|�7�~:�F����v��#M淚ȴ�ѯ�'��Iy���]엕
yAQ����熧� ��v��V��;e�l���f�A������'C-�bڿ��s-�\�8����:��&48
����H�5V�:1��4��".�s�������-���\��-�ǔ7��o<�m�uCܝ�a�c��{ϵ�]'�H���-e�����ٰ���Ñ�}���7���D�
�ZV_b����`W���q%�\��Ǯ��< 3/#$=���ه6����.*����îpmh�xf�\[�!y�Oװ�kW7REȥT%��.�Q��688��Iz�������$�&[��c�b[�#��bD8���ݎ;�ua��������a���n���/�p@I��\]{h.r���#:=��k������L�_V��|�o�Ջ~l�O �k1����H�}����g�}�}������?��������j{G;\��rగ�՗
֗!��x�0s���Ki���!�}�ܺ�?{�W���p=�V��q��#�5��ÈMU~��a���t|�ŕ���Y5 ���� (X�=�`=�h�B���W5��v4��ׂMG>�CW3��&l�
�
�i=5�tE�k�wuRR��vX�b�8@4�.	>���rгvn�0~�5=�m]���+�"�D���2dw�ez(��[��cj�J��!N�!(���
,�-8��;��t~+�i����s�TPF����
2�66{b|D\z����xZ�M1�F��8!MPt�v�4G����YT5���m�����	�J��D:)���I��n+/_�V�;�<(�h��a]mmNq/+Ƙ���6\%�uG�i�r,��h�C��8�SZ��?��0�|#������NO����lG�[�twz� �ώ�Ԇ�j ���%޴�?8s�bغ��
p�9׻�/�/�J7���5���\�L��V?�9���y{'�؅-i�!6�pz��0��O�D/:25m��D�$�6��KMh�1�3��{��G��3#�>�P"|r�|���8��]|�81����;��W��p�/��]� T���O\⿇�=�u�qΠK�ķ�Xk36U:�X���M�R�휟O���B$MYp���\�8��+ꊂT����Q�;���� ;��Y�S����z��4AF��o^�qs=X�|�x�6�<�b/dQ<���)<�wv��$������D����������j,�����b`�!�������j�Z�M�~o��çӈ?�d$�~z7��;��1��vS}C�MZ�����꿡�i:h�7���	�ˋ$�Ҿ��X$���j�;*P"�E�E,������򔲤�*� ��O���Y�������)/�̟@5��l����&�\V��_'�;��냝���ж�eB�����t#��`�j�k񘅕;D����4�6�X�͊2���5�V="%�E�z�y�~��D�TW*�
B�0�����c�3���'��S�E�zFn	 � 5�}pb�ւ
�l��d���;�M���`�����L�I�Z�S�d�n�M!�@_��@d~���w1�	�Q�up��3B�_�P2$�NL�kl.2�c����J֝$�K{����c�^����q�-1�Q��܇6����__}���=�Z����������7�����?��G�?[?z�ɟ�Z�G˛���� ~�mC��_���[!H�y�� 8�J�V�4�֚���L�#�R ؐ��a�5�/�q&��开9�L�,�
�Γ��`1D�:v�%����:�b��L!-C�mF���\q��`lM5I^�����ս���/*9(IKd��7����I��=��y���:�?4�`�1tgi�Re޻349(�G���U�D�RZ7\�b
��#v�F���T��=�[H��lG�R��d�:)%_�)/�ߐ����Z�)"=��@�e��H&�bqh �� �w����PxMCI�9��U {>��o"I�td0�Qٵ��p1����ˇ�Ӱ��79������3 �WJG��3���Q�|��o����|�ǂu�E�u3�����% @���Q{�׮��8��o5.)��}@�������K�TC�s�&����>Ъ�(*�59��b��h�m�V�7���{[���/�;L�U�۞���@���~� �f����6��iύ�YO^�N��ǧ_�}ID�|�w�����U}�%�Ǐ	O�̅���f�WO���"aT4�%^�6�� ��8UX=Ű�c�������=mp��	���?�Hn�D�o������J�6a��C�i]����9��w"L��ah��Ol��^|��Z�/1r�)�3%�oN�$z��P~A,oƣ0jW�U��9���T
�1-]UR���'>�v��R	�+��'h��տ �l���~���	���+3zI��ꄖ���6�aW�����R�#=�@\�9�V�:�Ŧ ���_��.0�e�!P��PTA�H�p�A2����H� ���
P8�JU����m{�zliЅys@Ls5
o�,�S�!�9/^L��hp�I"��[��߉�1YSE�L��huv$b���Mn�%��	rOo����������,��d
���jL(Q����cN6%������TٙP�rǡ��$R�L+P,jr���c6q����ծ�l%��+V�E��>�=�ֹnAW�;��@�}��o���)�v�x,Q�w��d���C��O����F���pK�QzH&q*���̓΂�*@;J�C���|3�rշ�i��bd&�F$�'�s�B�� ��{�H��t��@�ތ�F�ii:�4G>m���|)�DM3c��\�řn����-7(���e�aJ�(W8�rg����t@ �o$�lͰ�q
{�xU�i�&��[��:���󊚔�Ө�a�xv�T��]V?��T�7co�}���NC�9p�9#��g���Lm�A٧�>��$%+7I��W�v�ۭ���2��KQ�`��_�n��\�� C��<=�Y��n��.�Ӿ����p�����x`����(��,流~��vsD�"��k�d,�4��@Ð*�ee	
k�%����.�=T	�����_�ʰ%��A�@��A��t�0p�8�&^#�����v�X+�1c��X�B�����YXMPr���;���.Ԓ��\��13BK��- 8�Rì�A}�d��"DHd���FD�7V�g�AY��/�X���?��U��R���4~p��Yϭ8e�)!*��q�q:���u�]�mO5žnY�3�!���4���y��L�])���E&N=�AbS��3�"9R���rФ$��
� 7�(�����hD��Ie��0J,.�3���t���/�xT��#a)S��C35��Xs	�8�>������&((����$w�;�����k��) �:e��3x�<5Dg�\2���4�%)��Rv��>H�]��V/�I�Z��)��T��@
Ky~:_-���i�y��d��Y�+�Ŕ���͚�s�F$�1=%�i�m�*F�2���ݭ�X�a*|M�XVk]J�������	`:���[D���G�c� �  �g�穋\�Q��+�����P��:%*���\#ŉ�dp�x���"���byD ���%�؍�w"����%�sw��,E��$i-8����N�:�!{�~���(��r>�9-t��C�\jd�#����8�,�ۙjQ�4=&�T�gu�ט�רf3��!`��q�R!W!���Ee�I�b�y�B$SFX�&�T�m�WL�iU7y��U�Qk�7.�,�R�D���C�ظ����EI���Thɴ�	&()s��+��A,��
r��d���" 7�)�2���s�$"��b
�����pVy�/I)c�y~�P�|F5����N�6�R|�0�0-"W5/�@�s\f��Gq7^�_������$eT��7���"w[��[�-$���)&�W�ٽ�//n-9X`&�����5�,�ay5�\u
SFG]Њ9�!(顙hIJ��́�
Q�tq�K�5X<��N* ���hX�+���h��Ӧ.�ʳ��m��;�x1����]
V
������\�<�Ɗ�WS8�jF@@g��)0�O ��)NE3����,]Z��'�8�=
��"�<���ɖ�l�Z0di���o��7���Z��q0!�s @��7ڜ���iy�Mi�I�����]N.$�U��R-��kM�U��AԜ*�Ѷ�_��j�.��bC�4���2(�:i�^B<�g���A��k���u}X�$nX�gL�@����%g����*��v!eʨ�z�p7kW�i�}vat�������Ό� ���^���bb�S3�V��M#�;�4�����:i6
¯�H�=C��?����#�>��[`��D��\#���u;k��Ȣ��-jPT-���cjPm�O$3���睤̪�,�76=��r��� ����ʠ����zlrx=�I�y���v��YC�
D��\O:��ՈǒPh���de�)��V6�~"I��]}Mjۛ����E�g����>������l����f�����g}�_ L�w�FZr��4���-��׍;�F���d��$?g��QS>�9n�{e/�L���^G�T���e��艫�s�V�*����xw#aq��Ao���j�V� �t�������gWB��j��Ɍ��@D����K�X�G6��ت%U���`b!L�?{TQn��d�DI�|T�#d�F����I<k�!g]��eue���I�Z�p��=��a���!~a��o��E�T���d) ���PSڳ��Ok�N���)�e��<��I�ӻ��,�drJD���9��e�,i@f\:�п��[9�������6�vj�� +Ox��ԡ��S�9I=�y_�:HF/�i�Ԧm�xm��3�l8T|�>�xΦ
��#�6N�j4ΒT=,-�=�ƮKl��Jr�O�KS3EΘ��47B����w)hA�;�'�1�,��{qm���c�}�VҲ�@�ŶV>�-�Nr,�B/�e���f��n����ɦ����촨C�j��˕��.M����@�h�7G$f��4���6����y,��\֮��3�|�uz�:Q"��ʶD�6@8�\xrtC�ޘ�&c��M縬�&'o����=�b�� �;�L��������E��i]bf�����L��Br�l��fKn!�Q2\�0V�\��5�lvw��U*<�|'B��d���hH�����9>� ��i��Y�Iӣ�'��Æ!�Ԩ�S�%Y/Hd�V�eۆ&�u��\����V���f/��-T�ȜH-
623�΃��L�����o��B�@ �2v۫��Ux����
~a��+f5~}	2�+`���k�qH}(��
5�w��t�c�E옮h�I�'f	Y������~pd�t�+�
OWє��j���pG�˽�<<�`O��,R���n�dS7��T�E��lW��5��N&^����|�L���p�ʬ�ll[��b��ê�&�E��N8��%=�0�gM�R)q������-S��O?�]7��l�����-WW���<B�?hF�8bt�i�T$�.R�eq��M^-c���I�hL�����myo �����8�����y������7$
�'\\���1�=ek��.��͕����á����&9m�䅊z��)y�-���Ut�A�\j�%Xm3P �_�^K�R��95O�/9n����)��[��y�m�o����$V��?V_kû�F����b��'ZEہ�ur��ɩ�T��R�IKa֖�)����Y���q�Z�#|����v�# 	�d��k}kU`҂܌m���5�ӳ-{ouq�i}ͼ���Q!+����v�:��G���Z�1��b�<�o:��V%L\Қ!���5�jx�O:� o�3�g��.����T�߿�,����Le� �=}\Tk��_úd��LG���B�&��R*���+�� V���^�W^G=���&WT>J���,�q��7��"�"��;�V)��h�"#�_EԶa�3t��\�(�T`Ԧ��@���d]1���6#��bj��eo�#�wDY�v���f���H��z���Q��k��J9K=�Ɍ^|�L���.Z
Q[��k?���%N�[��||V!�f�E���I�ߋ�4��+8X�y[Ȋw[O��`7�-Fk&�G���˩9��P: �+BQ[A���HiiM�?"IV��f= ֱBv<+) �dz�.���?z�ޱP�ܰ��$��^FRDϪ��5�n��z�/J��Eg� �kQ��r�E}��Q'�ѫo�H-�˚|�����P�} �=G�2�'��S�@��F�`I1Y��դ��IQ.\[�^�+^��V���w~�9g�۞�AO-ګ���ئ�y�sL��ܠ��N�z�)�1;5��Ԟ\��E �$	"~��'e�]�8:��T�#�
��5iĖN[Hڎx��g��v�O���Ϙ����4=aL�����H奭����rО1�r����ܣy-�Vj��Q[�%YJ�g����}A��f�<�2���$KjB���g��u`0F��f�c��գ�Kr�3\��K�I�,7-�ɗ1��=�[I��I�LKmk��F.����M;1�േ��(�]�Q���/۰�ʗrSD�X�1�0�<O/I۲ۻ�E&���Sw������Msse�ރ���8݅qx+��Z"����~�r'fz�~7��\͒V���x�-}tN<�oz�m ^��f�2��q�lt�IEZ�mB�$�1#��Utս[^���w�_׺/�Ea��'	h�Ng=m��;V�P�6]� kQ}.�u�)��������������?e������rb����U�ט.��ѷ֙+ꊃ;'2���Vǐo(��jZ4f�g"wJ�!�V'W�1�@�M)/{;���@�X��z/��$����}�������SK��+��)�7�(_6N/
��q3�Z,���Vm�+��7V��~m��^�'�o��r��2di��j,���	���Bԙ��=9���{��%w3�[b�V���׀ojl(n�o�,h!��w(�r����YwmB~o��nd9fHMh��hD���ɵx	�gII�VWj�I�T�Դ�J/�&X6=�����R���1��ݞ5K�t7��Dk��!�cu�T��5.�(�M�	���[ܽ<�@^F�4>����|v���B�e`��s1�۹���,��(@�i������b�~����y�3�|��o�[�5S������Sy,/�4�����߆������ +I.1�~؍u@�ȕ�c�"�)�v�����;v�hϘ��2�V��ƺ.:i�]�!���w�[�[#0M �6�aW�C��<�l��-_Qrӗd�:����|�R��T���̊6d=�Ȣ(q<��r/VʬŅ[�+զ�RCj�v�[���&\�A�}�FꕞUe�x�o��n��T�H�c�e�u`�� �������ԜK.N���̥%Hj����gJS������U�C�Xt��T�ѳ�L�#�6��rV��>0�-3�&�Ø�v�m���*�~���o�;���{�}5�	���J,I�hc�A�w�2[��)����
r��2�d;�ޭ����޽{�Ifj      �   �   x�]�MB@ �����p�2>�(�C�!3M3����"VF��.]���^�WI�H~��x #KHk<:F��YG'�91�#��kJZ�dƣ���B#�����vF�S���^�6������{�o������nǭP^�C��p*ʋ&���IG}d��C;e%n5:�(���~ B9>�     